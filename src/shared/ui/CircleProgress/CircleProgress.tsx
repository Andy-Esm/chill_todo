import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './CircleProgress.module.scss'

interface CircleProgressProps {
  className?: string
  current: number
  renderContent?: () => ReactNode | null
}

export const CircleProgress = ({
  className,
  current,
  renderContent = () => null,
}: CircleProgressProps) => {
  const totalPercent = 314
  const currentPercent = (314 / 100) * current
  return (
    <div className={classNames(styles['progress-wrapper'], className)}>
      <svg className={styles['progress-svg']} viewBox='0 0 106 106'>
        <circle className={styles['progress-outer-circle']} cx='50%' cy='50%' r='50' />
        <circle
          className={styles['progress-inner-circle']}
          cx='50%'
          cy='50%'
          r='50'
          style={{ strokeDasharray: `${currentPercent}px ${totalPercent}px` }}
        />
      </svg>
      <div className={styles['progress-content']}>{renderContent()}</div>
    </div>
  )
}
