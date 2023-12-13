import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonSizes = 'full' | 'medium' | 'small'

type ButtonStyles = 'accept' | 'cancel' | 'disabled' | 'outline' | 'primary'

interface ButtonProps {
  bold?: boolean
  children: ReactNode
  className?: string
  disabled?: boolean
  filled?: boolean
  onClick?: () => void
  size?: ButtonSizes
  style?: ButtonStyles
  type?: 'button' | 'submit'
  uppercase?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    disabled = false,
    onClick,
    size = 'medium',
    style = 'cancel',
    type = 'button',
  } = props
  const btnStyle = styles[`btn-${style}`]
  const btnSize = styles[`btn-${size}`]
  const btnAllStyles = classNames(
    styles.btn,
    btnSize,
    btnStyle,
    {
      [styles.bold]: props.bold,
      [styles.filled]: props.filled,
      [styles.uppercase]: props.uppercase,
    },
    className,
  )

  return (
    <button className={btnAllStyles} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
