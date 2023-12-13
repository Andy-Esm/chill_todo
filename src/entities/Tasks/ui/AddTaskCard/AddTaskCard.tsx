import { IconFont } from '@shared/ui/IconFont'
import styles from './AddTaskCard.module.scss'

interface AddTaskCardProps {
  onClick?: () => void
}

export const AddTaskCard = ({ onClick }: AddTaskCardProps) => {
  return (
    <div className={styles['add-task-card']} onClick={onClick}>
      <div className={styles['add-icon-button']}>
        <IconFont className={styles['add-icon']} color='white' iconName='icon-plus-rectangle' />
      </div>
    </div>
  )
}
