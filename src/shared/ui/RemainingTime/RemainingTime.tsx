import { getDeclensions } from '@shared/lib/helpers/getDeclensions'
import classNames from 'classnames'
import moment, { Moment } from 'moment'
import styles from './RemainingTime.module.scss'

interface RemainingTimeProps {
  className?: string
  date: Moment
}

const getRemainingString = (daysLeft: number, timeIn: 'days' | 'hours') => {
  const variants: Record<typeof timeIn, string[]> = {
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
  }
  return daysLeft < 0
    ? 'Срок истек'
    : `${getDeclensions(daysLeft, ['Остался', 'Осталось', 'Осталось'])} ${daysLeft} ${getDeclensions(daysLeft, variants[timeIn])}`
}

export const RemainingTime = ({ className, date }: RemainingTimeProps) => {
  const remainingDays = date.diff(moment(), 'days')
  const remainingHours = date.diff(moment(), 'hours')
  const remainingZero = remainingDays <= 0
  const remainingClass = classNames(styles['remaining-time'], className, {
    [styles['remaining-time-limit']]: remainingZero,
  })

  return (
    <span className={remainingClass}>
      {remainingDays === 0
        ? getRemainingString(remainingHours, 'hours')
        : getRemainingString(remainingDays, 'days')}
    </span>
  )
}
