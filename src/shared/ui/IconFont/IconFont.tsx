import classNames from 'classnames'
import styles from '../../assets/style.module.scss'
import iconStyles from './IconFont.module.scss'
export type IconName = keyof typeof styles
export type IconColor = 'warn' | 'error' | 'primary' |'success' | 'white' | 'default' | 'text'

export interface IconProps {
  iconName: IconName
  className?: string
  color?: IconColor
}

export const IconFont = ({iconName, className, color}: IconProps) => {

  const iconStyle = classNames(
    styles[iconName], 
    color && iconStyles[color], 
    className)

  return <i className={iconStyle}></i>
}
