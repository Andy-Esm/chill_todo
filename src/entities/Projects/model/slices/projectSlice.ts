import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProjectStatus } from '../types/Project'

export interface ProjectsState {
  currentFilter: ProjectStatus
}

const initialState: ProjectsState = {
  currentFilter: ProjectStatus.CURRENT,
}

const projectSlice = createSlice({
  initialState,
  name: 'project',
  reducers: {
    setProjectsFilter: (state, action: PayloadAction<ProjectStatus>) => {
      state.currentFilter = action.payload
    },
  },
})

export const { setProjectsFilter } = projectSlice.actions

export const ProjectReducer = projectSlice.reducer
