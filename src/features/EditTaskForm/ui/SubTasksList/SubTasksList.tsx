import { SubTask, TaskType } from '@entities/Tasks'
import { IconButton } from '@shared/ui/IconButton'
import { Checkbox } from '@shared/ui/Checkbox'

import styles from './SubTasksList.module.scss'

interface SubTasksListProps {
    classname?: string
    subTasks?: SubTask[]
    onCheckboxClick?: (task: SubTask) => void
    checkedStatus?: TaskType
    onDelete?: (task: SubTask) => void
}
export const SubTasksList = ({subTasks, onCheckboxClick, checkedStatus, onDelete}: SubTasksListProps) => {
  
  return <>
    {subTasks?.map((subTask)=> 
      <div key={subTask.title} className={styles.subtask}>
        <Checkbox 
          className={styles.checkbox}
          name={subTask.title} 
          text={subTask.title} 
          onChange={() => onCheckboxClick?.(subTask)} 
          checked={subTask.type === checkedStatus} /> 
        {onDelete && 
        <IconButton 
          iconName='icon-trash'
          form='square' 
          size='medium' 
          style='error' 
          className={styles['remove-icon']} 
          onClick={()=> onDelete?.(subTask)}/>}
      </div>
    )}
  </>
}