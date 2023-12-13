import { memo } from 'react'
import classNames from 'classnames'
import styles from './RegistrationForm.module.scss'
import { Title } from '@shared/ui/Title'
import { CustomInput } from '@shared/ui/CustomInput'
import { Checkbox } from '@shared/ui/Checkbox'
import { Button } from '@shared/ui/Button'
import { useForm } from 'react-hook-form'
import { User } from '@entities/User'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../model/types/RegisterSchema'
import { useRegisterMutation } from '../api/registerApi'
import { FieldError } from '@shared/ui/FieldError'
interface RegistrationFormProps {
  onSuccess: () => void
}

interface UserRegister extends User {
  confirmPassword: string
}

export const RegistrationForm = memo(({ onSuccess }: RegistrationFormProps) => {
  const Confirm = <span>Я согласен на <a href="#">обработку персональных данных</a></span>

  const [registerUser] = useRegisterMutation()

  const {register, handleSubmit, formState: {errors, isValid}} = useForm<UserRegister>({
    resolver: yupResolver(RegisterSchema),
    mode: 'onChange'
  })

  const onSubmit = (data: UserRegister) => {
    //eslint-disable-next-line
    const {confirmPassword, ...user} = data
    registerUser(user)
    alert('Отправка данных формы регистрации')
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
        <CustomInput id='1' name='name' type='text' label='Имя пользователя*:' register={register('name')} className={nameError ? classNames(styles.invalid) : ''} />
        <FieldError backlight={true}>{errors.name?.message}</FieldError>
      </div>
      <div className={styles.field}>
        <CustomInput id='2' name='email' type='text' label='E-mail*:' register={register('email')} className={emailError ? classNames(styles.invalid) : ''} />
        <FieldError backlight={true}>{errors.email?.message}</FieldError>
      </div>
      <div className={styles.field}>
        <CustomInput id='3' name='password' type='password' label='Пароль*:' register={register('password')} className={passwordError ? classNames(styles.invalid) : ''} />
        <FieldError backlight={true}>{errors.password?.message}</FieldError>
      </div>
      <div className={styles.field}>
        <CustomInput id='4' name='password_repeat' type='password' label='Повтори пароль*:' register={register('confirmPassword')}  className={confirmPassworError ? classNames(styles.invalid) : ''} />
        <FieldError backlight={true}>{errors.confirmPassword?.message}</FieldError>
      </div>
      <div className={styles.footer}>
        <Checkbox text={Confirm} className={styles.checkbox} {...register('confirm')} crossout={false}/>
        <Button
          type='submit'
          style={isValid ? 'primary': 'disabled'}
          filled
          size='full'
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          <Title tag='h2'>Зарегистрироваться</Title>
        </Button>
      </div>
    </form>
  )
})
