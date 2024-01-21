import { IconFont } from '@shared/ui/IconFont'
import styles from './AddNoteCard.module.scss'

export const AddNoteCard = () => {
  return (
    <div className={styles['add-note-card']}>
      <div className={styles['add-icon-button']}>
        <IconFont className={styles['add-icon']} color='white' iconName='icon-plus-rectangle' />
      </div>
    </div>
  )
}
