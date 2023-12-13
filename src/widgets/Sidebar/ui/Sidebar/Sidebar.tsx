import { NavMenuList } from '@entities/NavMenu'
import { ProjectsMenuList } from '@entities/Projects'
import { TasksMenuList } from '@entities/Tasks'
import { EditTaskForm } from '@features/EditTaskForm'
import { useGetTasksQuery } from '@shared/api'
import { useAppDispatch } from '@shared/lib/hooks/redux'
import { UiActions } from '@shared/lib/store/UiSlice'
import { IconButton } from '@shared/ui/IconButton'
import { RegistrationLoginForm } from '@widgets/RegistrationLoginForm'
import { useNavigate } from 'react-router-dom'
import { MenuSkeleton } from '../MenuSkeleton/MenuSkeleton'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const addTask = () => {
    navigate('/tasks')
    dispatch(UiActions.openPopup(<EditTaskForm />))
  }

  const { data, isLoading: tasksLoading } = useGetTasksQuery()
  const tasks = data?.slice(0, 4)
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Chill ToDo</h2>
      <NavMenuList />
      <div className={styles['title-wrapper']}>
        <h2 className={styles['sidebar-title']}>Проекты</h2>
        <IconButton form='rounded' iconName='icon-plus' size='small' style='text' />
      </div>
      <ProjectsMenuList />
      <div className={styles['title-wrapper']}>
        <h2 className={styles['sidebar-title']}>Задачи</h2>
        <IconButton
          form='rounded'
          iconName='icon-plus'
          onClick={addTask}
          size='small'
          style='text'
        />
      </div>
      {tasksLoading && <MenuSkeleton />}
      {tasks && <TasksMenuList tasks={tasks} />}
      <RegistrationLoginForm />
    </aside>
  )
}
