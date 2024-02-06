import { ProjectStatus, setProjectsFilter } from '@entities/Projects'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { TabProps, TabsNavigation } from '@shared/ui/TabsNavigation'
import { ReactNode } from 'react'
import styles from './ProjectFilterTabs.module.scss'

interface TabsItems extends TabProps {
  type: ProjectStatus
}

const TabsItems: TabsItems[] = [
  {
    id: 0,
    text: 'Текущие',
    type: ProjectStatus.CURRENT,
  },
  {
    id: 1,
    text: 'Завершенные',
    type: ProjectStatus.COMPLETED,
  },
]

interface ProjectsFilterTabsProps {
  renderSearch?: ReactNode
}

export const ProjectsFilterTabs = ({ renderSearch }: ProjectsFilterTabsProps) => {
  const dispatch = useAppDispatch()

  const handleClick = (tab: TabsItems) => {
    dispatch(setProjectsFilter(tab.type))
  }

  return (
    <div className={styles.actions}>
      <TabsNavigation onClick={handleClick} tabs={TabsItems} />
      {renderSearch}
    </div>
  )
}
