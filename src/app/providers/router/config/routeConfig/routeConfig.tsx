import { CalendarPage } from '@pages/CalendarPage'
import { HomePage } from '@pages/HomePage'
import { PageNotFound } from '@pages/PageNotFound'
import { ProjectsPage } from '@pages/ProjectsPage'
import { TasksPage } from '@pages/TasksPage'
import { TeamsPage } from '@pages/TeamsPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  CALENDAR = 'calendar',
  HOME = 'home',
  KANBAN = 'kanban',
  NOT_FOUND = 'not_found',
  PROJECTS = 'projects',
  TASK = 'task',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.HOME]: '/',
  [AppRoutes.KANBAN]: '/teams',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.PROJECTS]: '/projects',
  [AppRoutes.TASK]: '/tasks',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.CALENDAR]: {
    element: <CalendarPage />,
    path: RoutePath.calendar,
  },
  [AppRoutes.HOME]: {
    element: <HomePage />,
    path: RoutePath.home,
  },
  [AppRoutes.KANBAN]: {
    element: <TeamsPage />,
    path: RoutePath.kanban,
  },
  [AppRoutes.NOT_FOUND]: {
    element: <PageNotFound />,
    path: RoutePath.not_found,
  },
  [AppRoutes.PROJECTS]: {
    element: <ProjectsPage />,
    path: RoutePath.projects,
  },
  [AppRoutes.TASK]: {
    element: <TasksPage />,
    path: RoutePath.task,
  },
}
