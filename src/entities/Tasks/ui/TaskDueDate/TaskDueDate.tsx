import moment, { Moment } from 'moment'
import { TaskCircleDeadline } from '../TaskCircleDeadline/TaskCircleDeadline'
import styles from './TaskDueDate.module.scss'

interface TaskDueDateProps {
  finishDate: Moment
  startDate: Moment
}

export const TaskDueDate = ({ finishDate, startDate }: TaskDueDateProps) => {
  const transformDate = (date: Moment) => {
    const firstRow =
      moment(date).calendar(null, {
        lastDay: '[Вчера, ]',
        lastWeek: '[]',
        nextDay: '[Завтра, ]',
        nextWeek: '[]',
        sameDay: '[Сегодня, ]',
        sameElse: '[]',
      }) + moment(date).format('dddd, DD MMMM YYYY г.')

    const secondRow = moment(date).format('HH:mm')
    return { firstRow, secondRow }
  }
  transformDate(finishDate)
  return (
    <div className={styles['task-due-date']}>
      <div className={styles['task-due-text']}>
        <span>Истекает</span>
        <span className={styles['task-due-main-text']}>{transformDate(finishDate).firstRow}</span>
        <span>{transformDate(finishDate).secondRow}</span>
      </div>
      <TaskCircleDeadline finish={finishDate} start={startDate} />
    </div>
  )
}
