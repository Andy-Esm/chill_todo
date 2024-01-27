import { IconFont } from '@shared/ui/IconFont'
import styles from './AddNoteCard.module.scss'

interface AddNoteCardProps {
  onClick?: () => void
}

export const AddNoteCard = ({ onClick }: AddNoteCardProps) => {
  return (
    <div className={styles['add-note-card']} onClick={onClick}>
      <div className={styles['add-icon-button']}>
        <IconFont className={styles['add-icon']} color='white' iconName='icon-plus-rectangle' />
      </div>
    </div>
  )
}
