import { LoginForm } from '@features/LoginForm'
import { RegistrationForm } from '@features/RegistrationForm'
import { Button } from '@shared/ui/Button'
import { Popup } from '@shared/ui/Popup'
import classNames from 'classnames'
import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from './RegistrationLoginForm.module.scss'

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
  const { t } = useTranslation()

  return (
    <div className={classNames(style['registration-login-form'])}>
      <Button bold filled onClick={openCloseModal(true)} style='primary' uppercase>
        {t('sign_in')}
      </Button>
      <Button bold onClick={openCloseModal(true, true)} style='primary' uppercase>
        {t('sign_up')}
      </Button>
      <Popup centered isActive={isActive} onClose={openCloseModal(false)}>
        {!isRegistrationForm && <LoginForm onSuccess={onSuccessLogin} />}
        {isRegistrationForm && <RegistrationForm onSuccess={onSuccessRegistration} />}
      </Popup>
    </div>
  )
})

RegistrationLoginForm.displayName = 'RegistrationLoginForm'
