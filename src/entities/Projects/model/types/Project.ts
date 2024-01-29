import { Moment } from 'moment'

export enum ProjectStatus {
  COMPLETED = 'completed',
  CURRENT = 'current',
}

export interface Project {
  deadlineDate?: Moment
  id?: string
  startDate: Moment
  status: ProjectStatus
  tasksIdsList?: string[] //id задач
  teamId?: string //id команды
  text?: string
  title: string
}
