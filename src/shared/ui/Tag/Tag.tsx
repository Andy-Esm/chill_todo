import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './Tag.module.scss'

export type TagColor = 'red' | 'yellow' | 'green' | 'blue'

interface TagProps {
  children: ReactNode
  color: TagColor
  transparent?: boolean
  onClick?: () => void
}

export const Tag = ({children, color, transparent, onClick}: TagProps) => {

  const tagColor = styles[`tag-${color}`]
  const tagStyles = classNames(styles.tag, tagColor, {[styles.transparent] : transparent})

  return <span className={tagStyles} onClick={onClick}>{children}</span>
}