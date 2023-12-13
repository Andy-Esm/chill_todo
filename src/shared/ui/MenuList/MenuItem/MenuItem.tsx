import styles from './MenuItem.module.scss'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { IconFont, IconProps } from '@shared/ui/IconFont'

type menuItemType = 'main' | 'project' | 'task'

export interface MenuItem {
  type: menuItemType
  icon: IconProps
  title: string
  to: string
  count?: number
  onClick?: (item: string) => void
}

export const MenuItem = ({ type, icon, title, to, count, onClick }: MenuItem) => {

  const menuItemType = styles[`menu-item-${type}`]
  const menuItemTypeStyles = classNames(styles['menu-item'], menuItemType)

  const getMenuItemClass = ({ isActive }: {isActive: boolean}): string => classNames(menuItemTypeStyles, {
    [styles[`menu-item-${type}-active`]] : isActive
  })

  return(
    <NavLink
      onClick={()=> onClick?.(title)}
      className={getMenuItemClass}
      to={to}>
      <div className={styles['icon-wrapper']}>
        <IconFont iconName={icon.iconName} color={icon.color} className={styles.icon} />
        {/* <Icon name={icon.name} color={icon.color} width={22} height={22} /> */}
      </div>
      <span className={styles['menu-item_title']}>{title}</span>
      {count && <span className={styles['menu-item_count']}>{count}</span>}
    </NavLink>
  )
}
