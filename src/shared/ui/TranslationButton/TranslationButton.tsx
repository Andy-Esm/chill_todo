import { useTranslation } from 'react-i18next'

export const TranslationButton = () => {
  const { i18n } = useTranslation()

  const handleToggleTranslation = () => {
    const nextLanguage = i18n.language === 'en' ? 'ru' : i18n.language === 'ru' ? 'de' : 'en'
    i18n.changeLanguage(nextLanguage)
  }

  return <button onClick={handleToggleTranslation}>RU/DE/EN</button>
}
