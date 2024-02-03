import classNames from 'classnames'
import { CSSProperties, memo } from 'react'
import styles from './Avatars.module.scss'

type AvatarsSize = 'big' | 'small'
type AvatarsColor = 'accent-danger' | 'accent-success'

interface AvatarsProps {
  className?: string
  color?: AvatarsColor
  imageUrl?: string
  size?: AvatarsSize
  borderWidth?: number
  border?: boolean
}

export const Avatars = memo(({ className, color, imageUrl, size, borderWidth, border }: AvatarsProps) => {
  const style: CSSProperties = {
    border: border ? `${borderWidth ?? 3}px solid var(--${color})` : '',
  }

  const allStyles = classNames(
    styles.component,
    {
      [styles.sizeBig]: size === 'big',
      [styles.sizeSmall]: size === 'small',
    },
    className,
  )

  return <>{imageUrl && <img alt='Avatars' className={allStyles} src={imageUrl} style={style} />}</>
})
Avatars.displayName = 'Avatars'
