import { ReactNode, memo, useCallback } from 'react'
import { ResponseTask } from '../../model/types/Task'
import { AddTaskCard } from '../AddTaskCard/AddTaskCard'
import { TaskCardSkeleton } from '../TaskCard/TaskCardSkeleton/TaskCardSkeleton'
import styles from './TaskCardsList.module.scss'

interface TaskCardsListProps {
  addTask?: () => void
  isLoading: boolean
  renderTask: (item: ResponseTask) => ReactNode
  tasks?: ResponseTask[]
}

export const TaskCardsList = memo(
  ({ addTask, isLoading, renderTask, tasks }: TaskCardsListProps) => {
    const handlerAddTaskClick = useCallback(() => {
      addTask?.()
    }, [])

    return (
      <div className={styles['tasks-wrapper']}>
        {isLoading && (
          <>
            <TaskCardSkeleton />
            <TaskCardSkeleton />
            <TaskCardSkeleton />
          </>
        )}
        {tasks && tasks.map(renderTask)}
        <AddTaskCard onClick={handlerAddTaskClick} />
      </div>
    )
  },
)

TaskCardsList.displayName = 'TaskCardsList'
