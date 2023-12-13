import { ReactNode } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  children?: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>{children}</div>
    </header>
  )
}
