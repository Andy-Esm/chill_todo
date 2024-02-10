import classNames from 'classnames'
import { CSSProperties, memo } from 'react'
import styles from './Avatars.module.scss'

type AvatarsSize = 'big' | 'small'
type AvatarsColor = 'accent-danger' | 'accent-success'

interface AvatarsProps {
  border?: boolean
  borderWidth?: number
  className?: string
  color?: AvatarsColor
  imageUrl?: string
  size?: AvatarsSize
}

export const Avatars = memo(
  ({ border, borderWidth, className, color, imageUrl, size }: AvatarsProps) => {
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

    return (
      <>{imageUrl && <img alt='Avatars' className={allStyles} src={imageUrl} style={style} />}</>
    )
  },
)
Avatars.displayName = 'Avatars'
