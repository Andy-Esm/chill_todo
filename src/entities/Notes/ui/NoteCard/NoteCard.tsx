import { Notes } from '@entities/Notes'
import { Title } from '@shared/ui/Title'
import moment from 'moment'
import styles from './NoteCard.module.scss'
moment.locale('ru')
interface NoteCardProps {
  note: Notes
  onClick?: () => void
  renderActions?: (note: Notes) => React.ReactNode
}

export const NoteCard = ({ note, onClick, renderActions }: NoteCardProps) => {
  const { date, text } = note
  const formattedDate = moment(date).format('LL')
  const handlerNoteCardClick = () => {
    onClick?.()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content} onClick={handlerNoteCardClick}>
        <Title tag='h3'>Title</Title>
        <div className={styles.text}>{text}</div>
        {renderActions && renderActions(note)}
      </div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  )
}
