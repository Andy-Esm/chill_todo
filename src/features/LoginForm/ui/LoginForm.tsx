import { memo } from 'react'
import classNames from 'classnames'
import styles from './LoginForm.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { Title } from '@shared/ui/Title'
import { CustomInput } from '@shared/ui/CustomInput'
import { Checkbox } from '@shared/ui/Checkbox'
import { Button } from '@shared/ui/Button'
import { useForm } from 'react-hook-form'
import { Login } from '../model/types/login'
import { LoginSchema } from '../model/types/LoginSchema'
import { useLoginByEmailMutation } from '../api/loginApi'
import { FieldError } from '@shared/ui/FieldError'

interface LoginFormProps {
  onSuccess: () => void
}

export const LoginForm = memo(({ onSuccess }: LoginFormProps) => {

  const {register, formState: {errors, isValid}, handleSubmit} = useForm<Login>({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange'
  })

  const [loginByEmail] = useLoginByEmailMutation()

  const onSubmit = (data: Login) => {
    loginByEmail(data)
    alert('Отправка данных формы входа')
    onSuccess()
  }

  const emailError = errors.email?.message
  const passwordError = errors.password?.message

  return (
    <form className={classNames(styles.form)}>
      <div className={styles.header}>
        <Title center>Вход</Title>
        <div className={styles.field}>
          <CustomInput id='2' name='email' type='text' label='E-mail*:' register={register('email')} className={emailError ? classNames(styles.invalid) : ''} />
          <FieldError>{emailError}</FieldError>
        </div>
        <div className={styles.field}>
          <CustomInput id='3' name='password' type='password' label='Пароль*:' register={register('password')} className={passwordError ? classNames(styles.invalid) : ''}/>
          <FieldError>{passwordError}</FieldError>
        </div>
        <div className={styles.col2}>
          <Checkbox text='Запомнить меня' className={styles.checkbox} {...register('stayOn')} crossout={false}/>
          <a href="#">забыли пароль?</a>
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          type='submit'
          style={isValid ? 'primary': 'disabled'}
          filled
          size='full'
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          <Title tag='h2'>Войти</Title>
        </Button>
      </div>
    </form>
  )
})
