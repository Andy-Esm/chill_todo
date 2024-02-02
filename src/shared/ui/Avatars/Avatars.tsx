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
  weight?: number
}

export const Avatars = memo(({ className, color, imageUrl, size, weight }: AvatarsProps) => {
  const style: CSSProperties = {
    border: `${weight}px solid var(--${color})`,
  }

  const allStyles = classNames(
    styles.component,
    {
      [styles.sizeBig]: size === 'big',
      [styles.sizeSmall]: size === 'small',
    },
    className,
  )
  const image = imageUrl && <img alt='Avatars' className={allStyles} src={imageUrl} style={style} />

  return image
})
Avatars.displayName = 'Avatars'
