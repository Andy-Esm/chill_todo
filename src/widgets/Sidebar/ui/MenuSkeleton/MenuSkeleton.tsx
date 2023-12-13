import { Skeleton } from '@shared/ui/Skeleton'
import styles from './MenuSkeleton.module.scss'

export const MenuSkeleton = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Skeleton height='24px' radius='6px' width='24px' />
        <Skeleton height='16px' width='100%' />
      </div>
      <div className={styles.wrapper}>
        <Skeleton height='24px' radius='6px' width='24px' />
        <Skeleton height='16px' width='100%' />
      </div>
      <div className={styles.wrapper}>
        <Skeleton height='24px' radius='6px' width='24px' />
        <Skeleton height='16px' width='100%' />
      </div>
    </>
  )
}
