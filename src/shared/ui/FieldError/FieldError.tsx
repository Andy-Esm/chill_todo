import { ReactNode, memo } from 'react'
import styles from './FieldError.module.scss'
import classNames from 'classnames'

interface FieldErrorProps {
    classname?: string
    children: string | ReactNode
    backlight?: boolean
}
export const FieldError = memo((props: FieldErrorProps) => {
  const {children, classname} = props

  const errorStyle = classNames(styles.error, classname)
  if (!children) return null

  return <small className={errorStyle}>{children}</small>
})
