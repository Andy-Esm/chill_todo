import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import style from './Title.module.scss'

interface TitleProps {
  center?: boolean
  children: ReactNode
  className?: string
  fontFamily?: 'heading' | 'main'
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span'
}

export const Title = memo(
  ({ center, children, className, fontFamily = 'heading', tag = 'h1' }: TitleProps) => {
    const H = tag as JSX.ElementType

    const titleClasses = classNames(
      style.title,
      {
        [style.center]: center,
      },
      style[fontFamily],
      className,
    )

    return <H className={titleClasses}>{children}</H>
  },
)

Title.displayName = 'Title'
