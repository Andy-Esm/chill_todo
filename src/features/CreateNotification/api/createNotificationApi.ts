import { Notification } from '@entities/Notification'
import { Task } from '@entities/Tasks'
import { rtkApi } from '@shared/api'

export type UpdatedFields = Partial<Task>

const createNotificationApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ['tasks', 'notifications'] })
  .injectEndpoints({
    endpoints: (build) => ({
      createNotification: build.mutation<Notification[], Notification[]>({
        extraOptions: { delay: 0 },
        invalidatesTags: ['notifications'],
        query: (notifications) => ({
          body: notifications,
          method: 'Post',
          url: 'notifications',
        }),
      }),
      updateTaskList: build.mutation<string[], { taskIds: string[]; updateFields: UpdatedFields }>({
        extraOptions: { delay: 0 },
        invalidatesTags: ['tasks'],
        query: (body) => ({
          body: body,
          method: 'PATCH',
          url: 'tasks',
        }),
      }),
    }),
  })

export const { useCreateNotificationMutation, useUpdateTaskListMutation } = createNotificationApi
