import classNames from 'classnames'
import { CSSProperties, useEffect } from 'react'
import { toast } from 'react-toastify'
import { IconFont, IconName } from '../IconFont'
import styles from './Toast.module.scss'
import 'react-toastify/dist/ReactToastify.css'

type ToastSize = 'normal'
type ToastBgStyle = 'accent-danger' | 'accent-success' | 'nav'
type ToastIcon = { check: IconName; close: IconName }
type ToastFontStyle = 'neutral'

interface ToastStyle {
  background?: boolean
  border?: boolean
  borderWidth?: number
  colorBg?: ToastBgStyle
  colorFont?: ToastFontStyle
  size?: ToastSize
}

interface ToastContent {
  iconName?: ToastIcon
  message?: string
}

interface ToastBehavior {
  autoClose?: number
  closeOnClick?: () => void
}

interface ToastProps extends ToastStyle, ToastContent, ToastBehavior {}

export const Toast = ({
  autoClose = 3000,
  background,
  border,
  borderWidth,
  colorBg,
  colorFont,
  iconName,
  message,
  size,
}: ToastProps) => {
  const style: CSSProperties = {
    backgroundColor: background ? `var(--${colorBg})` : '',
    border: border && !background ? `${borderWidth ?? 2}px solid var(--nav)` : '',
    color: colorFont ? `var(--${colorFont})` : '',
  }
  const allStyles = classNames(styles.component, {
    [styles.sizenormal]: size === 'normal',
  })
  const closeToast = () => {
    toast.dismiss()
  }
  const closeOnClick = () => {
    closeToast()
  }

  useEffect(() => {
    const timeout = setTimeout(closeToast, autoClose)

    return () => {
      clearTimeout(timeout)
    }
  }, [autoClose])

  return (
    <div className={allStyles} style={style}>
      <div className={classNames(styles.content, { [styles.colorfont]: border && !background })}>
        {iconName?.check && <IconFont iconName={iconName.check} />}
        {message}
      </div>
      <div
        className={classNames(styles.iconclose, { [styles.colorfont]: border && !background })}
        onClick={closeOnClick}
      >
        {iconName?.close && <IconFont iconName={iconName.close} />}
      </div>
    </div>
  )
}

export default Toast
