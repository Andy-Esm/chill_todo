import {MouseEvent} from 'react'
import classNames from 'classnames'
import { IconFont, IconName } from '@shared/ui/IconFont'

import styles from './IconButton.module.scss'

type IconButtonSize = 'small' | 'medium' | 'large';
type IconButtonStyle = 'primary' | 'warn' | 'error' | 'success' | 'default' | 'text';
type IconButtonForm = 'rounded' | 'square' | 'circle';
interface IconButtonProps {
	iconName: IconName
	size?: IconButtonSize
	style?: IconButtonStyle
	form: IconButtonForm;
	onClick?: (e: MouseEvent) => void
	className?: string;
}

export const IconButton = ({
  style = 'primary',
  size = 'small',
  form = 'rounded',
  iconName,
  onClick,
  className,
}: IconButtonProps) => {
  const allStyles = classNames(
    styles['icon-btn'],
    styles[style],
    styles[size],
    styles[form],
    className
  )
  return (
    <button onClick={onClick} className={allStyles}>
      <IconFont 
        iconName={iconName}/>
    </button>
  )
}
