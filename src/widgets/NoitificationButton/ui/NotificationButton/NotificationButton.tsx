import { NotificationList } from '@entities/Notification'
import { useCreateTaskNotification } from '@features/CreateNotification'
import { useSetReadNotifications } from '@features/SetReadNotifications'
import { useGetNotificationsListQuery } from '@shared/api'
import { IconFont } from '@shared/ui/IconFont'
import { Popover } from '@shared/ui/Popover'
import styles from './NotificationButton.module.scss'

export const NotificationButton = () => {
  useCreateTaskNotification()

  const { data: notifications, isLoading } = useGetNotificationsListQuery()

  const filteredNotifications = notifications?.filter((item) => !item.isRead)
  const { handleMount, handleSetLastIndex } = useSetReadNotifications(filteredNotifications)

  return (
    <Popover
      offsetY={20}
      renderButton={() => (
        <IconFont className={styles['icon']} color='primary' iconName='icon-notification' />
      )}
      renderPanel={() => (
        <NotificationList
          height={320}
          isLoading={isLoading}
          notifications={filteredNotifications}
          onItemsRendered={handleSetLastIndex}
          setIsOpen={handleMount}
        />
      )}
    />
  )
}
