import { Title } from '@shared/ui/Title'
import { ProjectsPageContent } from '@widgets/ProjectsPageContent'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
  return (
    <div className={styles.component}>
      <Title className={styles.title}>Проекты</Title>
      <ProjectsPageContent />
    </div>
  )
}

export default ProjectsPage
