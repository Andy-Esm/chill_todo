import i18n from 'i18next'
import localforage from 'localforage'

const languages = ['en', 'ru', 'de']
const namespaces = ['auth', 'menu']

const loadTranslations = async () => {
  for (const lng of languages) {
    for (const ns of namespaces) {
      const cacheKey = `i18next_${lng}_${ns}`
      try {
        const cachedTranslations = await localforage.getItem(cacheKey)
        if (cachedTranslations) {
          i18n.addResourceBundle(lng, ns, cachedTranslations)
        } else {
          const translations = await import(`./locales/${lng}/${ns}.json`)
          i18n.addResourceBundle(lng, ns, translations.default)
          await localforage.setItem(cacheKey, translations.default)
        }
      } catch (error) {
        console.error(`Ошибка при загрузке переводов ${lng}/${ns}:`, error)
      }
    }
  }
}

i18n.init(
  {
    defaultNS: 'menu',
    fallbackLng: 'ru',
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    lng: 'ru',
    ns: namespaces,
  },
  async () => {
    await loadTranslations()
  },
)

export default i18n
