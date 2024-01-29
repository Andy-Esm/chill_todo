import { useAppDispatch } from '../hooks/redux'
import { UiActions } from '../store/UiSlice'

export function useClosePopup() {
  const dispatch = useAppDispatch()

  const closePopup = () => {
    dispatch(UiActions.closePopup())
  }

  return closePopup
}
