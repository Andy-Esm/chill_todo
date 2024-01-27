import { Notes } from '@entities/Notes'
import { useDeleteNoteMutation } from '@shared/api'
import { IconButton } from '@shared/ui/IconButton'
import styles from './NotesCardActions.module.scss'

interface TaskCardActionsProps {
  note: Notes
}
export const NotesCardActions = ({ note }: TaskCardActionsProps) => {
  const [deleteTask] = useDeleteNoteMutation()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (note.id) {
      deleteTask(note.id)
    }
  }

  return (
    <div className={styles['note-actions']}>
      <IconButton
        form='circle'
        iconName='icon-close'
        onClick={handleDelete}
        size='medium'
        style='error'
      />
    </div>
  )
}
