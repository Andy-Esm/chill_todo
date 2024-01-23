import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { setToken } from '@shared/lib/store/tokenSlice'
import { Button } from '@shared/ui/Button'
import { Checkbox } from '@shared/ui/Checkbox'
import { CustomInput } from '@shared/ui/CustomInput'
import { FieldError } from '@shared/ui/FieldError'
import { Title } from '@shared/ui/Title'
import classNames from 'classnames'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useLoginByEmailMutation } from '../api/loginApi'
import { LoginSchema } from '../model/types/LoginSchema'
import { Login } from '../model/types/login'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
  onSuccess: () => void
}

type MutationResult = {
  data?: { token: null | string } | undefined
  error?: null | string
}

export const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<Login>({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  })

  const [loginByEmail] = useLoginByEmailMutation()

  const dispatch = useAppDispatch()
  const onSubmit = async (data: Login) => {
    try {
      const result = (await loginByEmail(data)) as MutationResult
      if ('data' in result) {
        const token = result?.data?.token
        if (token) {
          dispatch(setToken(token))
        }
      } else {
        console.log(result.error)
      }
    } catch (error) {
      console.log(error)
    }
    // alert('Отправка данных формы входа')
    onSuccess()
  }

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  return (
    <form className={classNames(styles.form)}>
      <div className={styles.header}>
        <Title center>Вход</Title>
        <div className={styles.field}>
          <CustomInput
            className={emailError ? classNames(styles.invalid) : ''}
            id='2'
            label='E-mail*:'
            name='email'
            register={register('email')}
            type='text'
          />
          <FieldError>{emailError}</FieldError>
        </div>
        <div className={styles.field}>
          <CustomInput
            className={passwordError ? classNames(styles.invalid) : ''}
            id='3'
            label='Пароль*:'
            name='password'
            register={register('password')}
            type='password'
          />
          <FieldError>{passwordError}</FieldError>
        </div>
        <div className={styles.col2}>
          <Checkbox
            className={styles.checkbox}
            text='Запомнить меня'
            {...register('stayOn')}
            crossout={false}
          />
          <a href='#'>забыли пароль?</a>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          disabled={!isValid}
          filled
          onClick={handleSubmit(onSubmit)}
          size='full'
          style={isValid ? 'primary' : 'disabled'}
          type='submit'
        >
          <Title tag='h2'>Войти</Title>
        </Button>
      </div>
    </form>
  )
})

LoginForm.displayName = 'LoginForm'
