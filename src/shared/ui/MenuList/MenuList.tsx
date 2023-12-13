import { MenuItem } from './MenuItem/MenuItem'
interface MenuListNavigation {
  menuList: MenuItem []
  onClick?: (item: string) => void
}

export const MenuList = ({ menuList, onClick }: MenuListNavigation) => {

  return(
    <nav>
      {menuList.map(({ type, icon, title, to, count }) => (
        <MenuItem type={type} key={title} icon={icon} title={title} to={to} count={count} onClick={onClick} />
      ))}
    </nav>
  )
}
