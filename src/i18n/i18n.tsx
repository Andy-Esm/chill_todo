import i18n from 'i18next'

const languages = ['en', 'ru', 'de']
const namespaces = ['auth', 'menu']

const loadTranslations = async () => {
  for (const lng of languages) {
    for (const ns of namespaces) {
      try {
        const translations = await import(`../locales/${lng}/${ns}.json`)
        i18n.addResourceBundle(lng, ns, translations.default)
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
