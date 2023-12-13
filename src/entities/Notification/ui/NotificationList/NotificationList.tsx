import { VariableSizeList as List, ListChildComponentProps, ListOnItemsRenderedProps } from 'react-window'
import { memo, useEffect, useRef } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'

import { NotificationListSkeleton } from './NotificationListSkeleton'
import { Notification } from '../../model/types/Notification'
import styles from './NotificationList.module.scss'

interface NotificationListProps {
    classname?: string
    width?:number
    height?:number
    onItemsRendered?: (props: ListOnItemsRenderedProps) => void
    notifications?: Notification[] 
    isLoading?: boolean
    setIsOpen?: (data: boolean) => void
}

export const NotificationList = memo(({notifications, isLoading, width, height, onItemsRendered, setIsOpen}: NotificationListProps) => {
  
  const currentWidth = width ? `${width}px` : '100%'
  const currentHeight = height ?? 320

  const hiddenRowRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<List>(null)

  useEffect(()=> {
    setIsOpen?.(true)
    return () => setIsOpen?.(false)
  }, [setIsOpen])

  function getItemHeight(notifications: Notification[], index: number) {
    if (hiddenRowRef.current !==null) hiddenRowRef.current['textContent'] = notifications[index].text
    return Number(hiddenRowRef.current?.clientHeight)
  }

  const Row = ({ index, style, data } : ListChildComponentProps<Notification[]>) => 
    (<div key={data[index].id} style={style} className={styles.notification}>{data[index].text}</div>)
  
  return <>
    <div className={styles.list}>
      <div ref={hiddenRowRef} style={{  width: currentWidth }} className={styles.hidden}></div>

      {isLoading && <NotificationListSkeleton/>}

      { notifications?.length === 0 && <div className={styles.empty}>Нет новых уведомлений</div>}

      { notifications && notifications.length > 0 && 
    <AutoSizer style={{height: `${currentHeight}px`}}  disableWidth onResize={() =>{
      if (listRef.current !== null) listRef.current.resetAfterIndex(0, true)
    }}>
      {({height}) =>
        <List   
          className={styles.scroll}
          height={height}
          estimatedItemSize={80}
          itemCount={notifications.length}
          itemSize={(index)=>getItemHeight(notifications, index)}
          width={currentWidth}
          itemData={notifications}
          ref={listRef}
          onItemsRendered={onItemsRendered}
        >
          {Row}
        </List>
      }
    </AutoSizer>
      }
    </div>

  </>
})