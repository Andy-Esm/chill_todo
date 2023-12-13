import { MenuList } from '@shared/ui/MenuList/MenuList'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { Task } from '../../model/types/Task'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { EditTaskForm } from '@features/EditTaskForm'
import { UiActions } from '@shared/lib/store/UiSlice'


interface TasksMenuListProps {
  tasks: Task[]
}

export const TasksMenuList = ({tasks}: TasksMenuListProps) => {
  const dispatch = useAppDispatch()
  const items: MenuItem[] = tasks.map((item)=> ({type: 'task', icon: {iconName: 'icon-tasks', color: 'success'}, title: item.title, to: '/tasks'}))
  const handleClick = (title: string) => {
    const task = tasks.find((item)=> item.title === title )
    dispatch(UiActions.openPopup(<EditTaskForm task={task} />))
  }
  return (
    <MenuList menuList={items} onClick={handleClick} />
  )
}
