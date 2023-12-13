import { ReactNode } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

type ButtonSizes = 'full' | 'medium' | 'small'

type ButtonStyles = 'primary' | 'cancel' | 'accept' | 'disabled' | 'outline'

interface ButtonProps {
  children: ReactNode
  size?: ButtonSizes
  style?: ButtonStyles
  type?: 'submit' | 'button'
  filled?: boolean
  disabled?: boolean
  uppercase?: boolean
  bold?: boolean
  onClick?: () => void
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, size = 'medium', style = 'cancel', onClick, type = 'button', disabled = false, className } = props
  const btnStyle = styles[`btn-${style}`]
  const btnSize = styles[`btn-${size}`]
  const btnAllStyles = classNames(
    styles.btn,
    btnSize,
    btnStyle,
    {
      [styles.filled]: props.filled,
      [styles.uppercase]: props.uppercase,
      [styles.bold]: props.bold
    },
    className
  )

  return (
    <button className={btnAllStyles} onClick={onClick} type={type} disabled={disabled} >
      {children}
    </button>
  )
}
