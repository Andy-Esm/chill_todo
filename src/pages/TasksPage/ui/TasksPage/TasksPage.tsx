import { Title } from '@shared/ui/Title'
import { TasksPageContent } from '@widgets/TasksPageContent'
import styles from './TasksPage.module.scss'

const TasksPage = () => {
  return (
    <div className={styles['tasks-page']}>
      <Title className={styles.title}>Список задач</Title>
      <TasksPageContent />
    </div>
  )
}
export default TasksPage
