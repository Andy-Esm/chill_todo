import { TaskReducer } from '@entities/Tasks'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@shared/api'
import { UiReducer, tokenReducer,  } from '@shared/lib/store'

const rootReducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
  tasks: TaskReducer,
  ui: UiReducer,
  token: tokenReducer,
})

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rtkApi.middleware),
  reducer: rootReducer,
})

export default store

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
