import { Dialog } from '@headlessui/react'
import { ReactNode } from 'react'
import styles from './Popup.module.scss'
import classNames from 'classnames'

interface PopupProps {
  children: ReactNode
  centered?: boolean
  isActive?: boolean
  fullHeight?: boolean
  animation?: boolean
  onClose?: () => void
}

export const Popup = ({
  children,
  centered,
  isActive,
  fullHeight,
  animation,
  onClose = () => null
}: PopupProps) => {

  const popupClasses = classNames(
    styles.popup,
    {
      [styles.centered]: centered
    }
  )
  const panelClasses = classNames(
    styles.panel,
    {
      [styles.animation]: animation,
      [styles.height100]: fullHeight
    }
  )

  return (
    <Dialog open={isActive} onClose={onClose} className={popupClasses}>
      <Dialog.Panel className={panelClasses}>
        {children}
      </Dialog.Panel>
    </Dialog>
  )
}
