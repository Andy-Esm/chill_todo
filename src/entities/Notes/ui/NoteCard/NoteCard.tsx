import { Title } from '@shared/ui/Title'
import styles from './NoteCard.module.scss'

export const NoteCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title tag='h3'>Title</Title>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, natus.
        </div>
      </div>
      <div className={styles.date}>12.12.2022</div>
    </div>
  )
}
