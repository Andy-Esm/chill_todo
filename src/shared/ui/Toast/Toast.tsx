import classNames from 'classnames'
import { CSSProperties, useEffect } from 'react'
import { toast } from 'react-toastify'
import { IconFont, IconName } from '../IconFont'
import styles from './Toast.module.scss'
import 'react-toastify/dist/ReactToastify.css'

type ToastSize = 'normal'
type ToastBgStyle = 'accent-danger' | 'accent-success' | 'nav' | 'neutral'
type ToastBorderStyle = 'accent-danger' | 'accent-success' | 'nav' | 'neutral'
type ToastIcon = { check: IconName; close: IconName }
type ToastFontStyle = 'accent-danger' | 'accent-success' | 'nav' | 'neutral'

interface ToastStyle {
  background?: boolean
  border?: boolean
  borderColor?: ToastBorderStyle
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
  autoClose,
  background,
  border,
  borderColor,
  borderWidth,
  colorBg,
  colorFont,
  iconName,
  message,
  size,
}: ToastProps) => {
  const style: CSSProperties = {
    backgroundColor: background ? `var(--${colorBg})` : '',
    border: border ? `${borderWidth ?? 2}px solid var(--${borderColor})` : '',
    color: colorFont ? `var(--${colorFont})` : '',
  }
  const allStyles = classNames(styles.component, {
    [styles.sizeNormal]: size === 'normal',
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
  }, [])

  return (
    <div className={allStyles} style={style}>
      <div className={styles.content}>
        {iconName?.check && <IconFont iconName={iconName.check} />}
        {message}
      </div>
      <div className={styles.iconClose} onClick={closeOnClick}>
        {iconName?.close && <IconFont iconName={iconName.close} />}
      </div>
    </div>
  )
}

export default Toast
