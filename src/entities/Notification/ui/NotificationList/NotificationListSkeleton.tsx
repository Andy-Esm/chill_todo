import { Skeleton } from '@shared/ui/Skeleton'
import styles from './NotificationList.module.scss'

export const NotificationListSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Skeleton height='50px' width='100%' />
      <Skeleton height='50px' width='100%' />
      <Skeleton height='50px' width='100%' />
    </div>
  )
}
