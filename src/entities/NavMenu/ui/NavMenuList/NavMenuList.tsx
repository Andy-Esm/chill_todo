import { RoutePath } from '@app/providers/router/config/routeConfig/routeConfig'
import { MenuItem } from '@shared/ui/MenuList/MenuItem/MenuItem'
import { MenuList } from '@shared/ui/MenuList/MenuList'
import { TranslationButton } from '@shared/ui/TranslationButton/TranslationButton'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const mainMenuList: MenuItem[] = [
  { icon: { iconName: 'icon-home' }, title: 'menu.home', to: RoutePath.home, type: 'main' },
  { icon: { iconName: 'icon-team' }, title: 'menu.team', to: RoutePath.kanban, type: 'main' },
  { icon: { iconName: 'icon-tasks' }, title: 'menu.tasks', to: RoutePath.task, type: 'main' },
  {
    icon: { iconName: 'icon-calendar' },
    title: 'menu.calendar',
    to: RoutePath.calendar,
    type: 'main',
  },
  {
    icon: { iconName: 'icon-folder' },
    title: 'menu.projects',
    to: RoutePath.projects,
    type: 'main',
  },
]

export const NavMenuList = () => {
  const { t } = useTranslation('menu')
  const [isTranslationsLoaded, setIsTranslationsLoaded] = useState(false)
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const translatedMainMenuList = mainMenuList.map((menuItem) => ({
    ...menuItem,
    title: t(menuItem.title),
  }))

  useEffect(() => {
    const loadTranslations = async () => {
      await delay(1000)
      setIsTranslationsLoaded(true)
    }
    loadTranslations()
  }, [])

  return (
    <>
      {isTranslationsLoaded && (
        <>
          <MenuList menuList={translatedMainMenuList} />
          <TranslationButton />
        </>
      )}
    </>
  )
}
