import { LoginForm } from '@features/LoginForm'
import { RegistrationForm } from '@features/RegistrationForm'
import { Button } from '@shared/ui/Button'
import { Popup } from '@shared/ui/Popup'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from './RegistrationLoginForm.module.scss'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const RegistrationLoginForm = memo(() => {
  const [isActive, setIsActive] = useState(false)
  const [isRegistrationForm, setIsRegistrationForm] = useState(false)
  const [isTranslationsLoaded, setIsTranslationsLoaded] = useState(false)
  const { t } = useTranslation('auth')

  useEffect(() => {
    const loadTranslations = async () => {
      await delay(1000)
      setIsTranslationsLoaded(true)
    }

    loadTranslations()
  }, [])

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
      <Button bold filled onClick={openCloseModal(true)} style='primary' uppercase>
        {t('auth.sign_in')}
      </Button>
      <Button bold onClick={openCloseModal(true, true)} style='primary' uppercase>
        {t('auth.sign_up')}
      </Button>
      <Popup centered isActive={isActive} onClose={openCloseModal(false)}>
        {isTranslationsLoaded && (
          <div>
            {!isRegistrationForm && <LoginForm onSuccess={onSuccessLogin} />}
            {isRegistrationForm && <RegistrationForm onSuccess={onSuccessRegistration} />}
          </div>
        )}
      </Popup>
    </div>
  )
})
RegistrationLoginForm.displayName = 'RegistrationLoginForm'
