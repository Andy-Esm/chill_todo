import classNames from 'classnames'
import styles from '../../assets/style.module.scss'
import iconStyles from './IconFont.module.scss'
export type IconName = keyof typeof styles
export type IconColor = 'default' | 'error' | 'primary' | 'success' | 'text' | 'warn' | 'white'

export interface IconProps {
  className?: string
  color?: IconColor
  iconName: IconName
}

export const IconFont = ({ className, color, iconName }: IconProps) => {
  const iconStyle = classNames(styles[iconName], color && iconStyles[color], className)

  return <i className={iconStyle}></i>
}
