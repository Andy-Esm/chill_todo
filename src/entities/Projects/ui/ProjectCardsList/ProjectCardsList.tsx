import { AddProjectCard } from '@entities/Projects/ui/AddProjectCard/ui/AddProjectCard'
import { ProjectCard } from '../ProjectCard'
import styles from './ProjectCardsList.module.scss'

export const ProjectCardsList = () => {
  return (
    <div className={styles['project-wrapper']}>
      <ProjectCard />
      <AddProjectCard />
    </div>
  )
}
export default ProjectCardsList
