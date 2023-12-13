import { memo, useEffect, useRef } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import {
  VariableSizeList as List,
  ListChildComponentProps,
  ListOnItemsRenderedProps,
} from 'react-window'
import { Notification } from '../../model/types/Notification'
import { NotificationListSkeleton } from './NotificationListSkeleton'
import styles from './NotificationList.module.scss'

interface NotificationListProps {
  classname?: string
  height?: number
  isLoading?: boolean
  notifications?: Notification[]
  onItemsRendered?: (props: ListOnItemsRenderedProps) => void
  setIsOpen?: (data: boolean) => void
  width?: number
}

export const NotificationList = memo(
  ({
    height,
    isLoading,
    notifications,
    onItemsRendered,
    setIsOpen,
    width,
  }: NotificationListProps) => {
    const currentWidth = width ? `${width}px` : '100%'
    const currentHeight = height ?? 320

    const hiddenRowRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<List>(null)

    useEffect(() => {
      setIsOpen?.(true)
      return () => setIsOpen?.(false)
    }, [setIsOpen])

    function getItemHeight(notifications: Notification[], index: number) {
      if (hiddenRowRef.current !== null)
        hiddenRowRef.current['textContent'] = notifications[index].text
      return Number(hiddenRowRef.current?.clientHeight)
    }

    const Row = ({ data, index, style }: ListChildComponentProps<Notification[]>) => (
      <div className={styles.notification} key={data[index].id} style={style}>
        {data[index].text}
      </div>
    )

    return (
      <>
        <div className={styles.list}>
          <div className={styles.hidden} ref={hiddenRowRef} style={{ width: currentWidth }}></div>

          {isLoading && <NotificationListSkeleton />}

          {notifications?.length === 0 && <div className={styles.empty}>Нет новых уведомлений</div>}

          {notifications && notifications.length > 0 && (
            <AutoSizer
              disableWidth
              onResize={() => {
                if (listRef.current !== null) listRef.current.resetAfterIndex(0, true)
              }}
              style={{ height: `${currentHeight}px` }}
            >
              {({ height }) => (
                <List
                  className={styles.scroll}
                  estimatedItemSize={80}
                  height={height}
                  itemCount={notifications.length}
                  itemData={notifications}
                  itemSize={(index) => getItemHeight(notifications, index)}
                  onItemsRendered={onItemsRendered}
                  ref={listRef}
                  width={currentWidth}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          )}
        </div>
      </>
    )
  },
)

NotificationList.displayName = 'NotificationList'
