import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TaskType } from '../types/Task'

export interface TasksState {
  currentFilter: TaskType
}

const initialState: TasksState = {
  currentFilter: TaskType.ALL,
}

const taskSlice = createSlice({
  initialState,
  name: 'task',
  reducers: {
    setFilter: (state, action: PayloadAction<TaskType>) => {
      state.currentFilter = action.payload
    },
  },
})

export const { setFilter } = taskSlice.actions

export const TaskReducer = taskSlice.reducer
