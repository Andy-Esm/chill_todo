import classNames from 'classnames'
import styles from './Icon.module.scss'
import {IconName, icons} from './model/const/icons'

export type ColorType = 'warn' | 'error' | 'primary' |'success' | 'white' | 'default' | 'text'

export interface IconProps {
  name: IconName
  className?: string
  color?: ColorType
  width?: string | number
  height?: string | number
}



export const Icon = ({ name, className, color, width, height}: IconProps) => {
  const IconComponent = icons[name]
  if (!IconComponent) {
    return null
  }
  const colorStyle = color && styles[color]
  const iconAllStyles = classNames(
    colorStyle,
    className
  )

  return (
    <IconComponent
      className={iconAllStyles}
      width={width}
      height={height}
    />
  )
}
