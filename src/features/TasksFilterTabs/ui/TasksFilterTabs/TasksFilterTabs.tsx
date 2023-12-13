import { TaskType, setFilter } from '@entities/Tasks'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { TabProps, TabsNavigation } from '@shared/ui/TabsNavigation'
import { ReactNode } from 'react'
import styles from './TasksFilterTabs.module.scss'

interface TabsItems extends TabProps {
  type: TaskType
}

const TabsItems: TabsItems[] = [
  {
    id: 0,
    text: 'Все',
    type: TaskType.ALL,
  },
  {
    id: 1,
    text: 'Текущие',
    type: TaskType.CURRENT,
  },
  {
    id: 2,
    text: 'Выполненные',
    type: TaskType.COMPLETED,
  },
  {
    id: 3,
    text: 'Просроченные',
    type: TaskType.OVERDUE,
  },
  {
    id: 4,
    text: 'Отложенные',
    type: TaskType.DEFERRED,
  },
]

interface TasksFilterTabsProps {
  renderSearch?: ReactNode
}

export const TasksFilterTabs = ({ renderSearch }: TasksFilterTabsProps) => {
  const dispatch = useAppDispatch()

  const handleClick = (tab: TabsItems) => {
    dispatch(setFilter(tab.type))
  }

  return (
    <div className={styles.actions}>
      <TabsNavigation onClick={handleClick} tabs={TabsItems} />
      {renderSearch}
    </div>
  )
}
