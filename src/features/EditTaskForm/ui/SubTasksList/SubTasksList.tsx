import { SubTask, TaskType } from '@entities/Tasks'
import { Checkbox } from '@shared/ui/Checkbox'
import { IconButton } from '@shared/ui/IconButton'
import styles from './SubTasksList.module.scss'

interface SubTasksListProps {
  checkedStatus?: TaskType
  classname?: string
  onCheckboxClick?: (task: SubTask) => void
  onDelete?: (task: SubTask) => void
  subTasks?: SubTask[]
}
export const SubTasksList = ({
  checkedStatus,
  onCheckboxClick,
  onDelete,
  subTasks,
}: SubTasksListProps) => {
  return (
    <>
      {subTasks?.map((subTask) => (
        <div className={styles.subtask} key={subTask.title}>
          <Checkbox
            checked={subTask.type === checkedStatus}
            className={styles.checkbox}
            name={subTask.title}
            onChange={() => onCheckboxClick?.(subTask)}
            text={subTask.title}
          />
          {onDelete && (
            <IconButton
              className={styles['remove-icon']}
              form='square'
              iconName='icon-trash'
              onClick={() => onDelete?.(subTask)}
              size='medium'
              style='error'
            />
          )}
        </div>
      ))}
    </>
  )
}
