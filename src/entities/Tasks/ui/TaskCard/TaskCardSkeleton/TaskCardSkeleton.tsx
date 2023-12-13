import styles from './TasCardSkeleton.module.scss'
import {Skeleton} from '@shared/ui/Skeleton'



export const TaskCardSkeleton = () => {
  return <div className={styles.skeleton}>
    <div className={styles.header}>
      <Skeleton width='24px' height='24px' radius='50%'/>
      <Skeleton width='24px' height='24px' radius='50%'/>
    </div>
    <div className={styles.title}>
      <Skeleton width='100%' height='8px' radius='6px'/>
      <Skeleton width='100%' height='8px' radius='6px'/>
    </div>
    <div>
      <Skeleton width='100%' height='14px' radius='6px'/>
    </div>
    <div className={styles.date}>
      <Skeleton width='50%' height='24px' radius='6px'/>
      <Skeleton width='45%' height='24px' radius='6px'/>
    </div>
  </div>
}
