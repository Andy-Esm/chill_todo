import { Notification } from '@entities/Notification'
import { Task } from '@entities/Tasks'
import { rtkApi } from '@shared/api'

export type UpdatedFields = Partial<Task>

const createNotificationApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ['tasks', 'notifications'] })
  .injectEndpoints({
    endpoints: (build) => ({
      updateTaskList: build.mutation<string[], { taskIds: string[]; updateFields: UpdatedFields }>({
        query: (body) => ({
          url: 'tasks',
          method: 'PATCH',
          body: body,
        }),
        invalidatesTags: ['tasks'],
        extraOptions: { delay: 0 },
      }),
      createNotification: build.mutation<Notification[], Notification[]>({
        query: (notifications) => ({
          url: 'notifications',
          method: 'Post',
          body: notifications,
        }),
        invalidatesTags: ['notifications'],
        extraOptions: { delay: 0 },
      }),
    }),
  })

export const { useCreateNotificationMutation, useUpdateTaskListMutation } = createNotificationApi
