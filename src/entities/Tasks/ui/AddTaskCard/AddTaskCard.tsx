import styles from './AddTaskCard.module.scss'
import { IconFont } from '@shared/ui/IconFont'

interface AddTaskCardProps {
    onClick?: () => void
}

export const AddTaskCard = ({onClick}:AddTaskCardProps) => {
  return (
    <div className={styles['add-task-card']} onClick={onClick}>
      <div className={styles['add-icon-button']}>
        <IconFont iconName='icon-plus-rectangle' color='white' className={styles['add-icon']}/>
      </div>
    </div>
  )
}
