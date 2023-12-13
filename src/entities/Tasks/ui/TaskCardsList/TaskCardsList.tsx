import { ReactNode, memo, useCallback } from 'react'
import { AddTaskCard } from '../AddTaskCard/AddTaskCard'
import { ResponseTask } from '../../model/types/Task'
import styles from './TaskCardsList.module.scss'
import {TaskCardSkeleton} from '../TaskCard/TaskCardSkeleton/TaskCardSkeleton'

interface TaskCardsListProps {
  tasks?: ResponseTask[]
  addTask?: () => void
  renderTask: (item: ResponseTask) => ReactNode
  isLoading: boolean
}

export const TaskCardsList = memo(({tasks, renderTask, addTask, isLoading}: TaskCardsListProps) => {

  const handlerAddTaskClick = useCallback(() => {
    addTask?.()
  }, [])

  return (
    <div className={styles['tasks-wrapper']}>
      {isLoading &&
        <>
          <TaskCardSkeleton/>
          <TaskCardSkeleton/>
          <TaskCardSkeleton/>
        </>
      }
      {tasks && tasks.map(renderTask)}
      <AddTaskCard onClick={handlerAddTaskClick} />
    </div>)
})
