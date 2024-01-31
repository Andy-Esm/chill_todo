import { IconFont } from '@shared/ui/IconFont'
import { Panel } from '@shared/ui/Panel'
import styles from './AddTaskCard.module.scss'

interface AddTaskCardProps {
  onClick?: () => void
}

export const AddTaskCard = ({ onClick }: AddTaskCardProps) => {
  return (
    <Panel className={styles['add-task-card']} onClick={onClick} pointer>
      <div className={styles['add-icon-button']}>
        <IconFont className={styles['add-icon']} color='white' iconName='icon-plus-rectangle' />
      </div>
    </Panel>
  )
}
