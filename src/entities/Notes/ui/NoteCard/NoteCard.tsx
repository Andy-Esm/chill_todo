import { Title } from '@shared/ui/Title'
import styles from './NoteCard.module.scss'

export const NoteCard = () => {
  return (
    <div className={styles.wrapper}>
      <Title tag='h3'>Title</Title>
      <div className={styles.text}>Text</div>
    </div>
  )
}
