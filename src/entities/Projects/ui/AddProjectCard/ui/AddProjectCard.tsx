import { IconFont } from '@shared/ui/IconFont'
import { Panel } from '@shared/ui/Panel'
import styles from './AddProjectCard.module.scss'

interface AddProjectCardProps {
  onClick?: () => void
}

export const AddProjectCard = ({ onClick }: AddProjectCardProps) => {
  return (
    <Panel className={styles['add-project-card']} onClick={onClick} pointer>
      <div className={styles['add-icon-button']}>
        <IconFont className={styles['add-icon']} color='white' iconName='icon-plus-rectangle' />
      </div>
    </Panel>
  )
}
