import { IconFont, IconProps } from '@shared/ui/IconFont'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.scss'

type menuItemType = 'main' | 'project' | 'task'

export interface MenuItem {
  count?: number
  icon: IconProps
  onClick?: (item: string) => void
  title: string
  to: string
  type: menuItemType
}

export const MenuItem = ({ count, icon, onClick, title, to, type }: MenuItem) => {
  const menuItemType = styles[`menu-item-${type}`]
  const menuItemTypeStyles = classNames(styles['menu-item'], menuItemType)

  const getMenuItemClass = ({ isActive }: { isActive: boolean }): string =>
    classNames(menuItemTypeStyles, {
      [styles[`menu-item-${type}-active`]]: isActive,
    })

  return (
    <NavLink className={getMenuItemClass} onClick={() => onClick?.(title)} to={to}>
      <div className={styles['icon-wrapper']}>
        <IconFont className={styles.icon} color={icon.color} iconName={icon.iconName} />
        {/* <Icon name={icon.name} color={icon.color} width={22} height={22} /> */}
      </div>
      <span className={styles['menu-item_title']}>{title}</span>
      {count && <span className={styles['menu-item_count']}>{count}</span>}
    </NavLink>
  )
}
