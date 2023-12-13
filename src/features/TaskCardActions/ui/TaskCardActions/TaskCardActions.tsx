import { ResponseTask, TaskType } from '@entities/Tasks'
import { useDeleteTaskMutation, useUpdateTaskStatusMutation } from '@shared/api'
import { IconButton } from '@shared/ui/IconButton'

import styles from './TaskCardActions.module.scss'

interface TaskCardActionsProps {
  task: ResponseTask
}

export const TaskCardActions = ({ task }: TaskCardActionsProps) => {
  const [deleteTask] = useDeleteTaskMutation()

  const [updateTask] = useUpdateTaskStatusMutation()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    deleteTask(task.id)
  }

  const handleSubmit = (e: React.MouseEvent) => {
    updateTask({ ...task, type: TaskType.COMPLETED })
    e.stopPropagation()
  }

  return (
    <div className={styles['task-actions']}>
      <IconButton
        iconName='icon-check'
        size='medium'
        form='circle'
        style='success'
        onClick={handleSubmit}
      />
      <IconButton
        iconName='icon-close'
        form='circle'
        size='medium'
        style='error'
        onClick={handleDelete}
      />
    </div>
  )
}
