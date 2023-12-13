import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import styles from './FieldError.module.scss'

interface FieldErrorProps {
  backlight?: boolean
  children: ReactNode | string
  classname?: string
}
export const FieldError = memo((props: FieldErrorProps) => {
  const { children, classname } = props

  const errorStyle = classNames(styles.error, classname)
  if (!children) return null

  return <small className={errorStyle}>{children}</small>
})

FieldError.displayName = 'FieldError'
