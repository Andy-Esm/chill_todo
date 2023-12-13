import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { IconFont } from '../IconFont'
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
  className?: string
  current: number
  total: number
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { className, current, total } = props
  const [totalWidth, setTotalWidth] = useState<number>(0)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const totalLineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (totalLineRef.current && progressRef.current) {
      setTotalWidth(totalLineRef.current.clientWidth)
      progressRef.current.style.width = `${(current / total) * totalWidth}px`
    }
  }, [current, totalLineRef.current, progressRef.current])

  const getCurrentClassName = () => {
    return current === total ? styles['progress-bar-full'] : styles['progress-bar-current']
  }

  return (
    <div className={classNames(styles['progress-bar'], className)}>
      <div className={styles['progress-bar-info']}>
        <IconFont className={styles['list-icon']} color='default' iconName='icon-list' />
        <span className={styles['progress-bar-title']}>Прогресс</span>
        <span className={getCurrentClassName()}>{current}</span>
        <span> / {total} </span>
      </div>
      <div className={styles['progress-bar-line']} ref={totalLineRef}>
        <div className={styles['progress-bar-done']} ref={progressRef}></div>
      </div>
    </div>
  )
}
