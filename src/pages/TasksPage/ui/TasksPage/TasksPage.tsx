import { TasksPageContent } from '@widgets/TasksPageContent'
import styles from './TasksPage.module.scss'

const TasksPage = () => {
  return (
    <div className={styles['tasks-page']}>
      <h1 className={styles.title}>Список задач</h1>
      <TasksPageContent/>
    </div>
  )
}
export default TasksPage
