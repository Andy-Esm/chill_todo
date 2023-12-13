import { Skeleton } from '@shared/ui/Skeleton'
import styles from './TasCardSkeleton.module.scss'

export const TaskCardSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.header}>
        <Skeleton height='24px' radius='50%' width='24px' />
        <Skeleton height='24px' radius='50%' width='24px' />
      </div>
      <div className={styles.title}>
        <Skeleton height='8px' radius='6px' width='100%' />
        <Skeleton height='8px' radius='6px' width='100%' />
      </div>
      <div>
        <Skeleton height='14px' radius='6px' width='100%' />
      </div>
      <div className={styles.date}>
        <Skeleton height='24px' radius='6px' width='50%' />
        <Skeleton height='24px' radius='6px' width='45%' />
      </div>
    </div>
  )
}
