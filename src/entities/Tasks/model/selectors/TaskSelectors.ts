import { TasksState } from '../slices/taskSlice'

export const getCurrentFilter = (state: TasksState) => {
  state.currentFilter
}