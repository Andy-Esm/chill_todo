import {useNavigate} from 'react-router-dom'

import { RegistrationLoginForm } from '@widgets/RegistrationLoginForm'
import {EditTaskForm} from '@features/EditTaskForm'
import { NavMenuList } from '@entities/NavMenu'
import { TasksMenuList } from '@entities/Tasks'
import { ProjectsMenuList } from '@entities/Projects'
import {IconButton} from '@shared/ui/IconButton'
import {UiActions} from '@shared/lib/store/UiSlice'
import {useAppDispatch} from '@shared/lib/hooks/redux'
import { useGetTasksQuery } from '@shared/api'

import {MenuSkeleton} from '../MenuSkeleton/MenuSkeleton'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const addTask = () => {
    navigate('/tasks')
    dispatch(UiActions.openPopup(<EditTaskForm />))
  }

  const {data, isLoading: tasksLoading} = useGetTasksQuery()
  const tasks = data?.slice(0,4)
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Chill ToDo</h2>
      <NavMenuList />
      <div className={styles['title-wrapper']}>
        <h2 className={styles['sidebar-title']}>Проекты</h2>
        <IconButton iconName='icon-plus' form='rounded' style='text' size='small'/>
      </div>
      <ProjectsMenuList />
      <div className={styles['title-wrapper']}>
        <h2 className={styles['sidebar-title']}>Задачи</h2>
        <IconButton iconName='icon-plus' form='rounded' style='text' size='small' onClick={addTask}/>
      </div>
      {tasksLoading && <MenuSkeleton/>}
      {tasks && <TasksMenuList  tasks={tasks} />}
      <RegistrationLoginForm />
    </aside>
  )
}
