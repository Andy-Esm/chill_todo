import { RouteProps } from 'react-router-dom'

import { CalendarPage } from '@pages/CalendarPage'
import { HomePage } from '@pages/HomePage'
import { TeamsPage } from '@pages/TeamsPage'
import { ProjectsPage } from '@pages/ProjectsPage'
import { TasksPage } from '@pages/TasksPage'
import {PageNotFound} from '@pages/PageNotFound'

export enum AppRoutes {
  HOME = 'home',
  TASK = 'task',
  KANBAN = 'kanban',
  CALENDAR = 'calendar',
  PROJECTS = 'projects',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.TASK]: '/tasks',
  [AppRoutes.KANBAN]: '/teams',
  [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.PROJECTS]: '/projects',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage/>
  },
  [AppRoutes.TASK]: {
    path: RoutePath.task,
    element: <TasksPage/>
  },
  [AppRoutes.KANBAN]: {
    path: RoutePath.kanban,
    element: <TeamsPage/>
  },
  [AppRoutes.CALENDAR]: {
    path: RoutePath.calendar,
    element: <CalendarPage/>
  },
  [AppRoutes.PROJECTS]: {
    path: RoutePath.projects,
    element: <ProjectsPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <PageNotFound/>
  }
}
