import { useCreateTaskNotification } from '@features/CreateNotification'
import { useSetReadNotifications } from '@features/SetReadNotifications'
import { NotificationList } from '@entities/Notification'
import { useGetNotificationsListQuery } from '@shared/api'
import { Popover } from '@shared/ui/Popover'
import { IconFont } from '@shared/ui/IconFont'

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
        <IconFont iconName='icon-notification' color='primary' className={styles['icon']} />
      )}
      renderPanel={() => (
        <NotificationList
          notifications={filteredNotifications}
          isLoading={isLoading}
          height={320}
          onItemsRendered={handleSetLastIndex}
          setIsOpen={handleMount}
        />
      )}
    />
  )
}
