import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Tag.module.scss'

export type TagColor = 'blue' | 'green' | 'red' | 'yellow'

interface TagProps {
  children: ReactNode
  color: TagColor
  onClick?: () => void
  transparent?: boolean
}

export const Tag = ({ children, color, onClick, transparent }: TagProps) => {
  const tagColor = styles[`tag-${color}`]
  const tagStyles = classNames(styles.tag, tagColor, { [styles.transparent]: transparent })

  return (
    <span className={tagStyles} onClick={onClick}>
      {children}
    </span>
  )
}
