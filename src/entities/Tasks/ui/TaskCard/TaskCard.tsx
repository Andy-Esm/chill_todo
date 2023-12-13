import classNames from 'classnames'
import { ReactNode } from 'react'
import moment from 'moment'

import { ResponseTask } from '@entities/Tasks'
import { RemainingTime } from '@shared/ui/RemainingTime'
import { ProgressBar } from '@shared/ui/ProgressBar'
import { TaskType } from '@entities/Tasks'

import styles from './TaskCard.module.scss'
moment.locale('ru')

interface TaskCardProps {
  task: ResponseTask
  onClick?: (task: ResponseTask)=> void
  renderActions?: (task: ResponseTask)=> ReactNode
  renderTags?: (task: ResponseTask) => ReactNode
}

export const TaskCard = ({task, onClick, renderActions, renderTags}: TaskCardProps) => {
  const { title, deadlineDate, tasks: subTasks } = task
  const momentDueDate = moment(deadlineDate)
  const endingDate = moment(deadlineDate).format('DD MMMM YYYY').toString()
  const handlerTaskCardClick = () => {
    onClick?.(task)
  }
  const progress = subTasks && subTasks.length>0 && subTasks?.reduce((res, task)=> task.type === TaskType.COMPLETED ? res+1 : res, 0)

  return <div className={styles['task-card']} onClick={handlerTaskCardClick}>
    { renderActions?.(task)}
    <div className={classNames(styles['task-info'], subTasks && styles['task-info-progress'])}>
      <div className={styles['task-text']}>{title}</div>
      {subTasks &&  (progress === 0 || progress) && subTasks.length>0 && (
        <ProgressBar
          current={progress}
          total={subTasks?.length}
          className={styles['task-progress']}
        />
      )}
      <div className={styles['task-info-details']}>
        {renderTags?.(task)}
      </div>
    </div>
    <div className={styles['task-dates']}>
      <div className={styles['task-ending']}>{endingDate}</div>
      <div><RemainingTime date={momentDueDate}/></div>
    </div>
  </div>
}
