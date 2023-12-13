import { MenuList } from '@shared/ui/MenuList/MenuList'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'

const projectsMenuList: MenuItem[] = [
  { type: 'project', icon: {iconName: 'icon-folder', color: 'error'}, title: 'ToDo лист', to: '/tod', count: 23 },
  { type: 'project', icon: {iconName: 'icon-folder', color: 'error'}, title: 'Магазин цветов', to: '/shop', count: 11 },
  { type: 'project', icon: {iconName: 'icon-folder', color: 'error'}, title: 'Секретный проект', to: '/secret', count: 8 }
]

export const ProjectsMenuList = () => {
  return (
    <MenuList menuList={projectsMenuList} />
  )
}
