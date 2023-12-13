import { useEffect, useRef, useState } from 'react'
import styles from './ProgressBar.module.scss'
import classNames from 'classnames'
import { IconFont } from '../IconFont'

interface ProgressBarProps {
    total: number,
    current: number, 
    className?: string
}

export const ProgressBar = (props: ProgressBarProps) => {
  const {current, total, className} = props
  const [totalWidth, setTotalWidth] = useState<number>(0)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const totalLineRef = useRef<HTMLDivElement | null>(null)

  useEffect(()=> {
    if (totalLineRef.current && progressRef.current) {
      setTotalWidth(totalLineRef.current.clientWidth)
      progressRef.current.style.width = `${(current/total)*totalWidth}px`
    }
  }, [current, totalLineRef.current, progressRef.current])

  const getCurrentClassName = () => {
    return current === total ? styles['progress-bar-full'] : styles['progress-bar-current']
  }

  return <div className={classNames(styles['progress-bar'], className)} >
    <div className={styles['progress-bar-info']}>
      <IconFont iconName='icon-list' color='default' className={styles['list-icon']} />
      <span className={styles['progress-bar-title']}>Прогресс</span>
      <span className={getCurrentClassName()}>{current}</span>
      <span> / {total} </span>
    </div>
    <div ref={totalLineRef} className={styles['progress-bar-line']}>
      <div ref={progressRef} className={styles['progress-bar-done']}></div>
    </div>
  </div>
}