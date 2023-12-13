import { ReactNode, memo } from 'react'
import classNames from 'classnames'
import style from './Title.module.scss'

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span'
  children: ReactNode
  center?: boolean
  className?: string
  fontFamily?: 'heading' | 'main'
}

export const Title = memo(({
  tag = 'h1',
  children,
  center,
  fontFamily = 'heading',
  className
}: TitleProps) => {
  const H = tag as JSX.ElementType
  
  const titleClasses = classNames(
    style.title,
    {
      [style.center]: center,
      
    },
    style[fontFamily],
    className
  )

  return (
    <H className={titleClasses}>{children}</H>
  )
})
