import { MenuItem } from './MenuItem/MenuItem'
interface MenuListNavigation {
  menuList: MenuItem[]
  onClick?: (item: string) => void
}

export const MenuList = ({ menuList, onClick }: MenuListNavigation) => {
  return (
    <nav>
      {menuList.map(({ count, icon, title, to, type }) => (
        <MenuItem
          count={count}
          icon={icon}
          key={title}
          onClick={onClick}
          title={title}
          to={to}
          type={type}
        />
      ))}
    </nav>
  )
}
