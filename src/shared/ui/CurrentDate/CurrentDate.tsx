import styles from './CurrentDate.module.scss'

const now = new Date()
const locale = navigator.language
const dateOptions: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const userDate = new Intl.DateTimeFormat(locale, dateOptions)

export const CurrentDate = () => {
  return (
    <>
      <span className={styles.date}>{userDate.format(now)}</span>
    </>
  )
}
