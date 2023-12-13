import { Notification } from '@entities/Notification'
import { rtkApi } from './rtkApi'

export const NotificationApi = rtkApi
  .enhanceEndpoints({ addTagTypes: ['notifications'] })
  .injectEndpoints({
    endpoints: (build) => ({
      getNotificationsList: build.query<Notification[], void>({
        query: () => 'notifications',
        providesTags: ['notifications'],
      }),
    }),
  })

export const { useGetNotificationsListQuery } = NotificationApi
