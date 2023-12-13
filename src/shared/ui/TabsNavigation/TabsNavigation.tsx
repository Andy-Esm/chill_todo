import { useEffect, useRef, useState } from 'react'
import styles from './TabsNavigation.module.scss'
import classNames from 'classnames'

export interface TabProps {
    id: number;
    text: string;
    icon?: string;
  }
  
  interface TabsNavigationProps <T extends TabProps> {
    tabs: T[];
    onClick?: (tab: T) => void;
}

export const TabsNavigation = <T extends TabProps>(props: TabsNavigationProps<T>) => {
  
  const { tabs, onClick } = props
  
  if (!tabs) return null
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeTabStyle, setActiveTabStyle] = useState({width: 0, left: 0})

  const tabsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect (() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex]
      setActiveTabStyle({left: currentTab?.offsetLeft ?? 0, width: currentTab?.clientWidth ?? 0})
    }
    setTabPosition()
    window.addEventListener('resize', setTabPosition)
    return () => window.removeEventListener('resize', setTabPosition)
  }, [activeTabIndex])

  const handleClick = (callback: typeof onClick, tab: typeof tabs[0], index: number) => {
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
          ref={el => (tabsRef.current[index] = el)}
          className={getTabClassname(index)}
          key={tab.id}
          onClick={()=>handleClick(onClick, tab, index)}>
          {tab.text}
        </div>
      ))}
      <span style={activeTabStyle} className={styles['tabs-indicator']}/>
    </div>
  )
}
