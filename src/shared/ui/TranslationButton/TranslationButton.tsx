import { useTranslation } from 'react-i18next'

export const TranslationButton = () => {
  const { i18n } = useTranslation()

  const handleToggleTranslation = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  return <button onClick={handleToggleTranslation}>EN/RU</button>
}
