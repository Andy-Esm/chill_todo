import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/redux'
import { UiActions } from '@shared/lib/store/UiSlice'
import { CurrentDate } from '@shared/ui/CurrentDate'
import { Popup } from '@shared/ui/Popup'
import { Content } from '@widgets/Content'
import { Header } from '@widgets/Header'
import { NotificationButton } from '@widgets/NoitificationButton'
import { Sidebar } from '@widgets/Sidebar'
import { AppRouter } from './providers/router'
import { AppState } from './providers/store/store'
import styles from './App.module.scss'

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
      <Popup animation fullHeight isActive={isActive} onClose={onPopupClose}>
        {children}
      </Popup>
    </div>
  )
}
