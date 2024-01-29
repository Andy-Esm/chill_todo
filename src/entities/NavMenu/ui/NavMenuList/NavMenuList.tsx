import { RoutePath } from '@app/providers/router/config/routeConfig/routeConfig'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { MenuList } from '@shared/ui/MenuList/MenuList'

const mainMenuList: MenuItem[] = [
  { icon: { iconName: 'icon-home' }, title: 'Главная', to: RoutePath.home, type: 'main' },
  { icon: { iconName: 'icon-team' }, title: 'Команда', to: RoutePath.kanban, type: 'main' },
  { icon: { iconName: 'icon-tasks' }, title: 'Задачи', to: RoutePath.task, type: 'main' },
  { icon: { iconName: 'icon-calendar' }, title: 'Календарь', to: RoutePath.calendar, type: 'main' },
  { icon: { iconName: 'icon-folder' }, title: 'Проекты', to: RoutePath.projects, type: 'main' },
]

export const NavMenuList = () => {
  return (
    <>
      <MenuList menuList={mainMenuList} />
    </>
  )
}
