import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

type MenuTranslation = Record<string, string>

i18n.use(initReactI18next).init({
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  lng: 'ru',
  resources: {
    en: {
      translation: require('../locales/en/translation.json') as MenuTranslation,
    },
    ru: {
      translation: require('../locales/ru/translation.json') as MenuTranslation,
    },
  },
})

export default i18n
