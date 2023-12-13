import moment from 'moment'
import { useEffect, useMemo } from 'react'

import { NotificationTag } from '@entities/Notification'
import { TaskType } from '@entities/Tasks'
import {
  useCreateNotificationMutation,
  useUpdateTaskListMutation,
} from '../../api/createNotificationApi'
import { useGetTasksQuery } from '@shared/api'

export function useCreateTaskNotification() {
  const { data: tasks } = useGetTasksQuery(undefined, { pollingInterval: 20000 })
  const overdueTasks = useMemo(
    () =>
      tasks?.filter(
        (task) =>
          task.type !== TaskType.OVERDUE &&
          task.type !== TaskType.COMPLETED &&
          moment(task.deadlineDate) < moment(),
      ),
    [tasks],
  )
  const [updateTasksList] = useUpdateTaskListMutation()
  const [createNotification] = useCreateNotificationMutation()
  useEffect(() => {
    const updateOverdueTasks = async () => {
      if (overdueTasks && overdueTasks?.length > 0) {
        try {
          const response = await updateTasksList({
            taskIds: overdueTasks.map((task) => task.id),
            updateFields: { type: TaskType.OVERDUE },
          })
          if ('data' in response) {
            const updatedTasks = overdueTasks.filter((task) => {
              return response.data.includes(task.id)
            })

            const notifications = updatedTasks.map((task) => ({
              text: `Задача ${task.title} просрочена`,
              tag: NotificationTag.TASK,
              taskId: task.id,
            }))
            await createNotification(notifications)
          }
        } catch (error) {
          throw new Error('Ошибка при обновлении задачи')
        }
      }
    }

    updateOverdueTasks()
  }, [overdueTasks])

  return null
}
