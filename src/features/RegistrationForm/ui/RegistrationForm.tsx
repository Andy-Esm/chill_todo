import { User } from '@entities/User'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@shared/ui/Button'
import { Checkbox } from '@shared/ui/Checkbox'
import { CustomInput } from '@shared/ui/CustomInput'
import { FieldError } from '@shared/ui/FieldError'
import { Title } from '@shared/ui/Title'
import classNames from 'classnames'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../api/registerApi'
import { RegisterSchema } from '../model/types/RegisterSchema'
import styles from './RegistrationForm.module.scss'
interface RegistrationFormProps {
  onSuccess: () => void
}

interface UserRegister extends User {
  confirmPassword: string
}

export const RegistrationForm = memo(({ onSuccess }: RegistrationFormProps) => {
  const Confirm = (
    <span>
      Я согласен на <a href='#'>обработку персональных данных</a>
    </span>
  )

  const [registerUser] = useRegisterMutation()

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<UserRegister>({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  })

  const onSubmit = async (data: UserRegister) => {
    //eslint-disable-next-line
    const { confirmPassword, ...user } = data
    const result = await registerUser(user)
    // alert('Отправка данных формы регистрации')
    console.log(result)
    onSuccess()
  }

  const nameError = errors.name?.message
  const emailError = errors.email?.message
  const passwordError = errors.password?.message
  const confirmPassworError = errors.confirmPassword?.message

  return (
    <form className={classNames(styles.form)}>
      <Title center>Регистрация</Title>
      <div className={styles.field}>
        <CustomInput
          className={nameError ? classNames(styles.invalid) : ''}
          id='1'
          label='Имя пользователя*:'
          name='name'
          register={register('name')}
          type='text'
        />
        <FieldError backlight={true}>{errors.name?.message}</FieldError>
      </div>
      <div className={styles.field}>
        <CustomInput
          className={emailError ? classNames(styles.invalid) : ''}
          id='2'
          label='E-mail*:'
          name='email'
          register={register('email')}
          type='text'
        />
        <FieldError backlight={true}>{errors.email?.message}</FieldError>
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
        <FieldError backlight={true}>{errors.password?.message}</FieldError>
      </div>
      <div className={styles.field}>
        <CustomInput
          className={confirmPassworError ? classNames(styles.invalid) : ''}
          id='4'
          label='Повтори пароль*:'
          name='password_repeat'
          register={register('confirmPassword')}
          type='password'
        />
        <FieldError backlight={true}>{errors.confirmPassword?.message}</FieldError>
      </div>
      <div className={styles.footer}>
        <Checkbox
          className={styles.checkbox}
          text={Confirm}
          {...register('confirm')}
          crossout={false}
        />
        <Button
          disabled={!isValid}
          filled
          onClick={handleSubmit(onSubmit)}
          size='full'
          style={isValid ? 'primary' : 'disabled'}
          type='submit'
        >
          <Title tag='h2'>Зарегистрироваться</Title>
        </Button>
      </div>
    </form>
  )
})

RegistrationForm.displayName = 'RegistrationForm'
