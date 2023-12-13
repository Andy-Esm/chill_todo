import classNames from 'classnames'
import { IconName, icons } from './model/const/icons'
import styles from './Icon.module.scss'

export type ColorType = 'default' | 'error' | 'primary' | 'success' | 'text' | 'warn' | 'white'

export interface IconProps {
  className?: string
  color?: ColorType
  height?: number | string
  name: IconName
  width?: number | string
}

export const Icon = ({ className, color, height, name, width }: IconProps) => {
  const IconComponent = icons[name]
  if (!IconComponent) {
    return null
  }
  const colorStyle = color && styles[color]
  const iconAllStyles = classNames(colorStyle, className)

  return <IconComponent className={iconAllStyles} height={height} width={width} />
}
