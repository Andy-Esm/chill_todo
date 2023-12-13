import { SubTask, Task, TaskType } from '@entities/Tasks'
import moment from 'moment'
import { useCallback, useState } from 'react'

export const useSubtasks = (task: Task | undefined) => {
  const [subTasks, setSubtasks] = useState<SubTask[]>(task?.tasks || [])
  const [removedSubTasks, setRemovedSubtasks] = useState<string[]>([])

  const addSubtask = useCallback((title: string | undefined) => {
    if (!title) return
    if (title) {
      const subtask: SubTask = {
        startDate: moment(task?.startDate) ?? moment(),
        title,
        isSubtask: true,
        type: TaskType.CURRENT,
      }
      setSubtasks([...subTasks, subtask])
    }
  },[subTasks])

  const changeSubtaskStatus = useCallback((task: SubTask ) => {
    const updatedSubtasks = subTasks.map(subTask => {
      if (subTask === task) {
        return {
          ...subTask,
          type: subTask.type === TaskType.COMPLETED ? TaskType.CURRENT : TaskType.COMPLETED
        }
      }
      return subTask
    })
    setSubtasks(updatedSubtasks)
  },[subTasks])

  const deleteSubtask = useCallback((task: SubTask) => {
    const updatedSubtasks = subTasks.filter(item => task.title !== item.title )
    setSubtasks(updatedSubtasks)
    if (task.id) {
      setRemovedSubtasks(prevState => prevState.concat(task.id as string))
    }
  }, [subTasks])

  return { subTasks, removedSubTasks, addSubtask, changeSubtaskStatus, deleteSubtask,  }
}