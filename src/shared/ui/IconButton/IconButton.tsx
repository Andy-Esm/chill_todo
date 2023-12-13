import { IconFont, IconName } from '@shared/ui/IconFont'
import classNames from 'classnames'
import { MouseEvent } from 'react'
import styles from './IconButton.module.scss'

type IconButtonSize = 'large' | 'medium' | 'small'
type IconButtonStyle = 'default' | 'error' | 'primary' | 'success' | 'text' | 'warn'
type IconButtonForm = 'circle' | 'rounded' | 'square'
interface IconButtonProps {
  className?: string
  form: IconButtonForm
  iconName: IconName
  onClick?: (e: MouseEvent) => void
  size?: IconButtonSize
  style?: IconButtonStyle
}

export const IconButton = ({
  className,
  form = 'rounded',
  iconName,
  onClick,
  size = 'small',
  style = 'primary',
}: IconButtonProps) => {
  const allStyles = classNames(
    styles['icon-btn'],
    styles[style],
    styles[size],
    styles[form],
    className,
  )
  return (
    <button className={allStyles} onClick={onClick}>
      <IconFont iconName={iconName} />
    </button>
  )
}

IconButton.displayname = 'IconButton'
