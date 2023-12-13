import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { MenuList } from '@shared/ui/MenuList/MenuList'

const projectsMenuList: MenuItem[] = [
  {
    count: 23,
    icon: { color: 'error', iconName: 'icon-folder' },
    title: 'ToDo лист',
    to: '/tod',
    type: 'project',
  },
  {
    count: 11,
    icon: { color: 'error', iconName: 'icon-folder' },
    title: 'Магазин цветов',
    to: '/shop',
    type: 'project',
  },
  {
    count: 8,
    icon: { color: 'error', iconName: 'icon-folder' },
    title: 'Секретный проект',
    to: '/secret',
    type: 'project',
  },
]

export const ProjectsMenuList = () => {
  return <MenuList menuList={projectsMenuList} />
}
