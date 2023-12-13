import { CircleProgress } from '@shared/ui/CircleProgress/CircleProgress'
import { IconFont } from '@shared/ui/IconFont'
import moment, { Moment } from 'moment'
import { useEffect, useState } from 'react'
import styles from './TaskCircleDeadline.module.scss'

const renderTimer = (time: string) => {
  return (
    <div className={styles['deadline-content']}>
      <IconFont className={styles['deadline-timer']} color='success' iconName='icon-stopwatch' />
      <p>{time}</p>
    </div>
  )
}

interface CircleDeadlineProps {
  finish: Moment
  onFinishDate?: () => void
  start: Moment
}

export const TaskCircleDeadline = ({
  finish,
  onFinishDate = () => undefined,
  start,
}: CircleDeadlineProps) => {
  if (!start || !finish) return null

  const getRecentTimeString = (diff: number): string => {
    return diff === 0 ? `${finish.diff(moment(), 'hours')} ч.` : `${diff} д.`
  }

  const totalTime = finish.diff(start, 'days')
  const [percent, setPercent] = useState(0)
  const recentTimeString = getRecentTimeString(finish.diff(moment(), 'days'))
  const recentPercent =
    finish.diff(moment(), 'days') > 0
      ? Math.floor((finish.diff(moment(), 'days') * 100) / totalTime)
      : 0
  const onTimeIsUp = finish.diff(moment(), 'days')

  useEffect(() => {
    const getPercent = (percent: number) =>
      percent === recentPercent ? recentPercent : percent + 1
    const interval = setInterval(() => {
      setPercent(getPercent(percent))
    }, 200)
    return () => {
      clearInterval(interval)
    }
  }, [percent])

  useEffect(() => {
    if (onTimeIsUp <= 0) return onFinishDate()
  }, [onTimeIsUp])

  return (
    <div className={styles['deadline-wrapper']}>
      <CircleProgress
        className={styles['deadline-circle']}
        current={percent}
        renderContent={() => renderTimer(recentTimeString)}
      />
    </div>
  )
}
