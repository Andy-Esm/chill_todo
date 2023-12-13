import { ReactNode } from 'react'
import styles from './Content.module.scss'

interface ContentProps {
  children: ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return <main className={styles.content}>{children}</main>
}
