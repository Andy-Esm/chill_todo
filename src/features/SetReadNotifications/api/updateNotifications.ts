import { Notification } from '@entities/Notification/model/types/Notification'
import { rtkApi } from '@shared/api'

type UpdatedFields = Partial<Notification>

export const updateNotificationsApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ['notifications'] })
  .injectEndpoints({
    endpoints: (build) => ({
      updateNotifications: build.mutation<
        void,
        { notifications: Notification[]; updateFields: UpdatedFields }
      >({
        query: (item) => ({
          url: 'notifications',
          method: 'PATCH',
          body: item,
        }),
        invalidatesTags: ['notifications'],
      }),
    }),
  })

export const { useUpdateNotificationsMutation } = updateNotificationsApi
