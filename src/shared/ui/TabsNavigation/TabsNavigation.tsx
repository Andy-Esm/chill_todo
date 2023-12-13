import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import styles from './TabsNavigation.module.scss'

export interface TabProps {
  icon?: string
  id: number
  text: string
}

interface TabsNavigationProps<T extends TabProps> {
  onClick?: (tab: T) => void
  tabs: T[]
}

export const TabsNavigation = <T extends TabProps>(props: TabsNavigationProps<T>) => {
  const { onClick, tabs } = props

  if (!tabs) return null
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeTabStyle, setActiveTabStyle] = useState({ left: 0, width: 0 })

  const tabsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex]
      setActiveTabStyle({ left: currentTab?.offsetLeft ?? 0, width: currentTab?.clientWidth ?? 0 })
    }
    setTabPosition()
    window.addEventListener('resize', setTabPosition)
    return () => window.removeEventListener('resize', setTabPosition)
  }, [activeTabIndex])

  const handleClick = (callback: typeof onClick, tab: (typeof tabs)[0], index: number) => {
    callback && callback(tab)
    setActiveTabIndex(index)
  }
  const getTabClassname = (index: number) => {
    const isActive = index === activeTabIndex ? styles['tab-active'] : ''
    return classNames(styles.tab, isActive)
  }

  return (
    <div className={styles['tabs-wrapper']}>
      {tabs.map((tab, index) => (
        <div
          className={getTabClassname(index)}
          key={tab.id}
          onClick={() => handleClick(onClick, tab, index)}
          ref={(el) => (tabsRef.current[index] = el)}
        >
          {tab.text}
        </div>
      ))}
      <span className={styles['tabs-indicator']} style={activeTabStyle} />
    </div>
  )
}
