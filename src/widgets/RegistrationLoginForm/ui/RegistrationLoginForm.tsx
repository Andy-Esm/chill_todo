import { memo, useState } from 'react'
import classNames from 'classnames'
import style from './RegistrationLoginForm.module.scss'
import { Button } from '@shared/ui/Button'
import { Popup } from '@shared/ui/Popup'
import { RegistrationForm } from '@features/RegistrationForm'
import { LoginForm } from '@features/LoginForm'

export const RegistrationLoginForm = memo(() => {
  const [isActive, setIsActive] = useState(false)
  const [isRegistrationForm, setIsRegistrationForm] = useState(false)

  const openCloseModal = (isActive: boolean, isRegistrationForm?: boolean) => () => {
    setIsActive(isActive)
    setIsRegistrationForm(!!isRegistrationForm)
  }

  const onSuccessLogin = () => {
    setIsActive(false)
    alert('Пользователь вошел!')
  }

  const onSuccessRegistration = () => {
    setIsActive(false)
    alert('Пользователь зарегистрировался!')
  }

  return (
    <div className={classNames(style['registration-login-form'])}>
      <Button
        style='primary'
        uppercase
        bold
        filled onClick={openCloseModal(true)}>Войти</Button>
      <Button
        style='primary'
        uppercase
        bold
        onClick={openCloseModal(true, true)}>Регистрация</Button>
      <Popup
        isActive={isActive}
        onClose={openCloseModal(false)}
        centered
      >
        {!isRegistrationForm && <LoginForm onSuccess={onSuccessLogin} />}
        {isRegistrationForm && <RegistrationForm onSuccess={onSuccessRegistration} />}
      </Popup>
    </div>
  )
})
