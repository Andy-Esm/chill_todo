import styles from './CircleProgress.module.scss'
import { ReactNode } from 'react'
import classNames from 'classnames'

interface CircleProgressProps {
  className?: string
  current: number
  renderContent?: () => ReactNode | null
}

export const CircleProgress = ({current, className, renderContent = () => null}:CircleProgressProps) => {
  const totalPercent = 314
  const currentPercent = 314/100*current
  return <div className={classNames(styles['progress-wrapper'], className)}>
    <svg viewBox='0 0 106 106' className={styles['progress-svg']} >
      <circle 
        className={styles['progress-outer-circle']} 
        r="50" cx="50%" cy="50%"/>
      <circle 
        className={styles['progress-inner-circle']} 
        style={{strokeDasharray: `${currentPercent}px ${totalPercent}px`}} 
        r="50" cx='50%' cy="50%"/>
    </svg>
    <div className={styles['progress-content']}>{renderContent()}</div>
  </div>
}