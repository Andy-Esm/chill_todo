import classNames from 'classnames'
import moment, { Moment } from 'moment'
import styles from './RemainingTime.module.scss'

interface RemainingTimeProps {
  className?: string
  date: Moment
}

const getRemainingString = (daysLeft: number) => {
  const lastTwo = parseInt(daysLeft.toString().slice(-2))
  const lastOne = parseInt(daysLeft.toString().slice(-1))
  switch (true) {
    case daysLeft < 0:
      return 'Срок истек'
    case (lastOne === 1 && lastTwo < 10) || (lastTwo > 20 && lastOne === 1):
      return `Остался ${daysLeft} день`
    case (lastTwo < 10 && lastOne > 1 && lastOne <= 4) ||
      (lastTwo > 20 && lastOne > 1 && lastOne <= 4):
      return `Осталось ${daysLeft} дня`
    default:
      return `Осталось ${daysLeft} дней`
  }
}

export const RemainingTime = ({ className, date }: RemainingTimeProps) => {
  const remainingDays = date.diff(moment(), 'days')
  const remainingClass = classNames(styles['remaining-time'], className)

  return <span className={remainingClass}>{getRemainingString(remainingDays)}</span>
}
