import styles from './MenuSkeleton.module.scss'
import {Skeleton} from '@shared/ui/Skeleton'


export const MenuSkeleton = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Skeleton width='24px' height='24px' radius='6px'/>
        <Skeleton width='100%' height='16px'/>
      </div>
      <div className={styles.wrapper}>
        <Skeleton width='24px' height='24px' radius='6px'/>
        <Skeleton width='100%' height='16px'/>
      </div>
      <div className={styles.wrapper}>
        <Skeleton width='24px' height='24px' radius='6px'/>
        <Skeleton width='100%' height='16px'/>
      </div>
    </>
  )
}
