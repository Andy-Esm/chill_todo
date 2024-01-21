import { CalendarPage } from '@pages/CalendarPage'
import { HomePage } from '@pages/HomePage'
import { NotesPage } from '@pages/NotesPage'
import { PageNotFound } from '@pages/PageNotFound'
import { ProjectsPage } from '@pages/ProjectsPage'
import { TasksPage } from '@pages/TasksPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  CALENDAR = 'calendar',
  HOME = 'home',
  NOT_FOUND = 'not_found',
  NOTES = 'notes',
  PROJECTS = 'projects',
  TASK = 'task',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CALENDAR]: '/calendar',
  [AppRoutes.HOME]: '/',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.NOTES]: '/notes',
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
  [AppRoutes.NOT_FOUND]: {
    element: <PageNotFound />,
    path: RoutePath.not_found,
  },
  [AppRoutes.NOTES]: {
    element: <NotesPage />,
    path: RoutePath.notes,
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
