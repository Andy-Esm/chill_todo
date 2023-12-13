import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@shared/api'
import { UiReducer } from '@shared/lib/store'
import { TaskReducer } from '@entities/Tasks'


const rootReducer = combineReducers({
  ui: UiReducer,
  tasks: TaskReducer,
  [rtkApi.reducerPath]: rtkApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(rtkApi.middleware)
})

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
