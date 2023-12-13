import styles from './Header.module.scss'
import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
}

export const Header = ({children}: HeaderProps) => {

  return (
    <header className= {styles.header}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </header>
  )
}
