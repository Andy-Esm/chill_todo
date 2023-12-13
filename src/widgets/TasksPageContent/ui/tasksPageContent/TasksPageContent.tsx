import { useEffect, useState } from 'react'
import { TaskCardActions } from '@features/TaskCardActions'
import { TasksFilterTabs } from '@features/TasksFilterTabs'
import { TaskCardsList, TaskCard, TaskType, ResponseTask } from '@entities/Tasks'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/redux'
import { UiActions } from '@shared/lib/store/UiSlice'
import { Search } from '@shared/ui/Search'
import { SearchTaskFilter } from '@shared/lib/helpers'
import { useGetTasksQuery } from '@shared/api'
import { EditTaskForm, useTags } from '@features/EditTaskForm'
import { TagList } from '@entities/Tags'


export const TasksPageContent = () => {

  const {data: tasks, isLoading: tasksLoading} = useGetTasksQuery()
  const dispatch = useAppDispatch()
  const {currentFilter} = useAppSelector(state => state.tasks)
  const [searchedTask, setSearchedTask] = useState<ResponseTask[]>([])

  const { getTags } = useTags()

  useEffect(() => {
    tasks && setSearchedTask(tasks)
  }, [tasks])

  const onSearch = (value: string) => {
    if (value && tasks) {
      const searchedTasks = SearchTaskFilter(value, tasks)
      setSearchedTask(searchedTasks)
    } else if (!value && tasks) {
      setSearchedTask(tasks)
    }
  }

  const editTask = (task: ResponseTask) => {
    dispatch(UiActions.openPopup(<EditTaskForm task={task}/>))
  }

  const addTask = () => {
    dispatch(UiActions.openPopup(<EditTaskForm />))
  }

  const renderSearch = () => {
    return <Search placeholder='Поиск по задачам ...' delay={1000} onChange={onSearch} />
  }

  const filteredTasks = currentFilter === TaskType.ALL ? searchedTask : searchedTask?.filter((task)=> task.type === currentFilter)

  return   (
    <>
      <TasksFilterTabs renderSearch={renderSearch()} />
      <TaskCardsList
        isLoading={tasksLoading}
        tasks={filteredTasks}
        renderTask={(task: ResponseTask) => (
          <div key={task.id}>
            <TaskCard
              task={task}
              onClick={editTask}
              renderActions={(task) => <TaskCardActions task={task} />}
              renderTags = {(task) => <TagList tagList={getTags(task?.tagsIds)} />}
            />
          </div>
        )}
        addTask={addTask}
      />
    </>
  )
}
