import { RoutePath } from '@app/providers/router/config/routeConfig/routeConfig'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { MenuList } from '@shared/ui/MenuList/MenuList'
import { TranslationButton } from '@shared/ui/TranslationButton/TranslationButton'
import { useTranslation } from 'react-i18next'

const mainMenuList: MenuItem[] = [
  { icon: { iconName: 'icon-home' }, title: 'home', to: RoutePath.home, type: 'main' },
  { icon: { iconName: 'icon-team' }, title: 'team', to: RoutePath.kanban, type: 'main' },
  { icon: { iconName: 'icon-tasks' }, title: 'tasks', to: RoutePath.task, type: 'main' },
  { icon: { iconName: 'icon-calendar' }, title: 'calendar', to: RoutePath.calendar, type: 'main' },
  { icon: { iconName: 'icon-folder' }, title: 'projects', to: RoutePath.projects, type: 'main' },
]

export const NavMenuList = () => {
  const { t } = useTranslation()

  const translatedMainMenuList = mainMenuList.map((menuItem) => ({
    ...menuItem,
    title: t(menuItem.title),
  }))

  return (
    <>
      <MenuList menuList={translatedMainMenuList} />
      <TranslationButton />
    </>
  )
}
