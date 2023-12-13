import { CircleProgress } from '@shared/ui/CircleProgress/CircleProgress'
import moment, { Moment } from 'moment'
import styles from './TaskCircleDeadline.module.scss'
import { useEffect, useState } from 'react'
import { IconFont } from '@shared/ui/IconFont'

const renderTimer = (time: string) => {
  return <div className={styles['deadline-content']}>
    <IconFont iconName='icon-stopwatch' color='success' className={styles['deadline-timer']}/>
    <p>{time}</p>
  </div>
}

interface CircleDeadlineProps {
  start: Moment,
  finish: Moment,
  onFinishDate?: () => void
}

export const TaskCircleDeadline = ({start, finish, onFinishDate = () => undefined}: CircleDeadlineProps) => {
  if (!start || !finish) return null
  
  const getRecentTimeString = (diff: number): string => {
    return diff === 0  ? `${finish.diff(moment(), 'hours')} ч.` : `${diff} д.`
  }

  const totalTime = finish.diff(start, 'days')
  const [percent, setPercent] = useState(0)
  const recentTimeString = getRecentTimeString(finish.diff(moment(),'days'))
  const recentPercent = finish.diff(moment(), 'days') > 0 ? Math.floor(finish.diff(moment(), 'days') * 100 / totalTime)  : 0
  const onTimeIsUp = finish.diff(moment(),'days')

  useEffect(()=> {
    const getPercent = (percent: number) => percent === recentPercent  ? recentPercent : percent + 1 
    const interval = setInterval(()=> {
      setPercent(getPercent(percent))
    }, 200)
    return () => {
      clearInterval(interval)
    }
  }, [percent])

  useEffect(()=> {
    if (onTimeIsUp <= 0) return onFinishDate()
  }, [onTimeIsUp])

  return (
    <div className={styles['deadline-wrapper']}>
      <CircleProgress current={percent} className={styles['deadline-circle']} renderContent={()=> renderTimer(recentTimeString)}/>
    </div>
  )
}