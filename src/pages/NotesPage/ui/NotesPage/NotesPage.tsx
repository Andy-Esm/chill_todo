import { Title } from '@shared/ui/Title'
import { NotesPageContent } from '@widgets/NotesPageContent/ui/NotesPageContent'
import styles from './NotesPage.module.scss'

const NotesPage = () => {
  return (
    <div className={styles['notes-page']}>
      <Title className={styles['title']} tag='h1'>
        Заметки
      </Title>
      <NotesPageContent />
    </div>
  )
}
export default NotesPage
