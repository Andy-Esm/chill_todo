import { Dialog } from '@headlessui/react'
import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Popup.module.scss'

interface PopupProps {
  animation?: boolean
  centered?: boolean
  children: ReactNode
  fullHeight?: boolean
  isActive?: boolean
  onClose?: () => void
}

export const Popup = ({
  animation,
  centered,
  children,
  fullHeight,
  isActive,
  onClose = () => null,
}: PopupProps) => {
  const popupClasses = classNames(styles.popup, {
    [styles.centered]: centered,
  })
  const panelClasses = classNames(styles.panel, {
    [styles.animation]: animation,
    [styles.height100]: fullHeight,
  })

  return (
    <Dialog className={popupClasses} onClose={onClose} open={isActive}>
      <Dialog.Panel className={panelClasses}>{children}</Dialog.Panel>
    </Dialog>
  )
}
