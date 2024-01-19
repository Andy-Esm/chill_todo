import classNames from 'classnames'
import { CSSProperties, ReactNode, memo } from 'react'
import style from './Grid.module.scss'

type Align = 'center' | 'end' | 'space-around' | 'space-between' | 'start' | 'stretch'

export interface GridProps {
  alignContent?: Align
  alignItems?: Align
  autoFlow?: 'dense' | 'row'
  children: ReactNode | ReactNode[]
  className?: string
  colMaxWidth?: number | string
  colMinWidth?: number | string
  colWidth?: number | string
  columns?: 'auto-fill' | 'auto-fit' | number | string
  gap?: 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64
  gridCol?: number | string
  gridRow?: number | string
  justifyContent?: Align
  justifyItems?: Align
}

export const Grid = memo(
  ({
    alignContent = 'stretch',
    alignItems = 'stretch',
    autoFlow = 'row',
    children,
    className,
    colMaxWidth = 'auto',
    colMinWidth = 'auto',
    colWidth = '1fr',
    columns = 1,
    gap = 16,
    gridCol,
    gridRow,
    justifyContent = 'stretch',
    justifyItems = 'stretch',
  }: GridProps) => {
    const colTemplate =
      typeof columns === 'string' && !['auto-fill', 'auto-fit'].includes(columns)
        ? columns
        : `repeat(${columns}, minmax(
            var(--colMinWidth, var(--colWidth)),
            var(--colMaxWidth, var(--colWidth))
          )`
    const styles = {
      '--align-content': alignContent,
      '--align-items': alignItems,
      '--auto-flow': autoFlow,
      '--col-template': colTemplate,
      '--colMaxWidth': typeof colMaxWidth === 'number' ? `${colMaxWidth}px` : colMaxWidth,
      '--colMinWidth': typeof colMinWidth === 'number' ? `${colMinWidth}px` : colMinWidth,
      '--colWidth': typeof colWidth === 'number' ? `${colWidth}px` : colWidth,
      '--gap': `${gap}px`,
      '--grid-col': typeof gridCol === 'number' ? `span ${gridCol}` : gridCol,
      '--grid-row': typeof gridRow === 'number' ? `span ${gridRow}` : gridRow,
      '--justify-content': justifyContent,
      '--justify-items': justifyItems,
    } as CSSProperties
    return (
      <div className={classNames(style.component, className)} style={styles}>
        {children}
      </div>
    )
  },
)
Grid.displayName = 'Grid'
