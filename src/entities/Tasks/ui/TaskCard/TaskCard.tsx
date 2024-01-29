import { ResponseTask } from '@entities/Tasks'
import { TaskType } from '@entities/Tasks'
import { Panel } from '@shared/ui/Panel'
import { ProgressBar } from '@shared/ui/ProgressBar'
import { RemainingTime } from '@shared/ui/RemainingTime'
import classNames from 'classnames'
import moment from 'moment'
import { ReactNode } from 'react'
import styles from './TaskCard.module.scss'
moment.locale('ru')

interface TaskCardProps {
  onClick?: (task: ResponseTask) => void
  renderActions?: (task: ResponseTask) => ReactNode
  renderTags?: (task: ResponseTask) => ReactNode
  task: ResponseTask
}

export const TaskCard = ({ onClick, renderActions, renderTags, task }: TaskCardProps) => {
  const { deadlineDate, tasks: subTasks, title } = task
  const momentDueDate = moment(deadlineDate)
  const endingDate = moment(deadlineDate).format('DD MMMM YYYY').toString()
  const handlerTaskCardClick = () => {
    onClick?.(task)
  }
  const progress =
    subTasks &&
    subTasks.length > 0 &&
    subTasks?.reduce((res, task) => (task.type === TaskType.COMPLETED ? res + 1 : res), 0)

  return (
    <Panel className={styles['task-card']} onClick={handlerTaskCardClick} pointer withShadow>
      {renderActions?.(task)}
      <div className={classNames(styles['task-info'], subTasks && styles['task-info-progress'])}>
        <div className={styles['task-text']}>{title}</div>
        {subTasks && (progress === 0 || progress) && subTasks.length > 0 && (
          <ProgressBar
            className={styles['task-progress']}
            current={progress}
            total={subTasks?.length}
          />
        )}
        <div className={styles['task-info-details']}>{renderTags?.(task)}</div>
      </div>
      <div className={styles['task-dates']}>
        <div className={styles['task-ending']}>{endingDate}</div>
        <div>
          <RemainingTime date={momentDueDate} />
        </div>
      </div>
    </Panel>
  )
}
