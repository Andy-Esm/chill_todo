import { EditTaskForm } from '@features/EditTaskForm'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { UiActions } from '@shared/lib/store/UiSlice'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { MenuList } from '@shared/ui/MenuList/MenuList'
import { Task } from '../../model/types/Task'

interface TasksMenuListProps {
  tasks: Task[]
}

export const TasksMenuList = ({ tasks }: TasksMenuListProps) => {
  const dispatch = useAppDispatch()
  const items: MenuItem[] = tasks.map((item) => ({
    icon: { color: 'success', iconName: 'icon-tasks' },
    title: item.title,
    to: '/tasks',
    type: 'task',
  }))
  const handleClick = (title: string) => {
    const task = tasks.find((item) => item.title === title)
    dispatch(UiActions.openPopup(<EditTaskForm task={task} />))
  }
  return <MenuList menuList={items} onClick={handleClick} />
}
