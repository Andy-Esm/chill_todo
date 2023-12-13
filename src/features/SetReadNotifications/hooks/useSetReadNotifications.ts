import { useUpdateNotificationsMutation } from './../api/updateNotifications'
import { Notification } from '@entities/Notification'
import { useEffect, useState } from 'react'
import { ListOnItemsRenderedProps } from 'react-window'

export const useSetReadNotifications = (data?: Notification[]) => {
  const [isOpen, setIsOpen] = useState<boolean>()
  const [lastIndex, setLastIndex] = useState<number>()

  const [updateNotifications] = useUpdateNotificationsMutation()

  const handleMount = (isMounted: boolean) => {
    setIsOpen(isMounted)
  }

  const handleSetLastIndex = ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
    setLastIndex(() => visibleStopIndex)
  }

  useEffect(() => {
    if (data?.length === 0) {
      setLastIndex(undefined)
    }
  }, [data])

  useEffect(() => {
    if (!isOpen && data && lastIndex !== undefined) {
      const update = async (data: Notification[]) => {
        try {
          await updateNotifications({ notifications: data, updateFields: { isRead: true } })
        } catch (error) {
          throw new Error()
        }
      }
      update(data)
    }
  }, [isOpen])

  return { handleMount, handleSetLastIndex }
}
