import { Header } from '@widgets/Header'
import { Sidebar } from '@widgets/Sidebar'
import { Content } from '@widgets/Content'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/redux'
import { UiActions } from '@shared/lib/store/UiSlice'
import { Popup } from '@shared/ui/Popup'

import { AppState } from './providers/store/store'
import { AppRouter } from './providers/router'
import styles from './App.module.scss'
import { NotificationButton } from '@widgets/NoitificationButton'
import { CurrentDate } from '@shared/ui/CurrentDate'

export const App = () => {
  const isActive = useAppSelector((state: AppState) => state.ui.popup.isActive)
  const children = useAppSelector((state: AppState) => state.ui.popup.children)
  const dispatch = useAppDispatch()
  const onPopupClose = () => {
    dispatch(UiActions.closePopup())
  }
  return (
    <div className={styles.app}>
      <Sidebar />
      <Header>
        <NotificationButton />
        <CurrentDate />
      </Header>
      <Content>
        <AppRouter />
      </Content>
      <Popup isActive={isActive} fullHeight animation onClose={onPopupClose}>
        {children}
      </Popup>
    </div>
  )
}
