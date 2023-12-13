import moment, { Moment } from 'moment'
import { TaskCircleDeadline } from '../TaskCircleDeadline/TaskCircleDeadline'
import styles from './TaskDueDate.module.scss'

interface TaskDueDateProps {
    startDate: Moment
    finishDate: Moment
}

export const TaskDueDate = ({startDate, finishDate} : TaskDueDateProps) => {

  const transformDate = (date: Moment) => {
    const firstRow = moment(date).calendar(null, {
      sameDay: '[Сегодня, ]',
      nextDay: '[Завтра, ]',
      nextWeek: '[]',
      lastDay: '[Вчера, ]',
      lastWeek: '[]',
      sameElse: '[]'
    }) + moment(date).format('dddd, DD MMMM YYYY г.')

    const secondRow = moment(date).format('HH:mm')
    return {firstRow, secondRow}
  }
  transformDate(finishDate)
  return <div className={styles['task-due-date']}>
    <div className={styles['task-due-text']}>
      <span>Истекает</span>
      <span className={styles['task-due-main-text']}>{transformDate(finishDate).firstRow }</span>
      <span>{transformDate(finishDate).secondRow }</span>
    </div>
    <TaskCircleDeadline start={startDate} finish={finishDate}/>
  </div>
}
