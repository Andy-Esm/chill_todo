import classNames from 'classnames'
import { ReactNode, memo } from 'react'
import style from './Panel.module.scss'

interface PanelProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  pointer?: boolean
  withShadow?: boolean
}
export const Panel = memo(({ children, className, onClick, pointer, withShadow }: PanelProps) => {
  const allStyles = classNames(
    style.component,
    {
      [style.cursor]: pointer,
      [style.shadow]: withShadow,
    },
    className,
  )
  return (
    <div className={allStyles} onClick={onClick}>
      {children}
    </div>
  )
})
Panel.displayName = 'Panel'
