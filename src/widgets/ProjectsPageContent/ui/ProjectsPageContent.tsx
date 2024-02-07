import ProjectCardsList from '@entities/Projects/ui/ProjectCardsList/ProjectCardsList'
import { ProjectsFilterTabs } from '@features/ProjectFilterTabs/ui/ProjectFilterTabs'

export const ProjectsPageContent = () => {
  return (
    <>
      <ProjectsFilterTabs />
      <ProjectCardsList />
    </>
  )
}
