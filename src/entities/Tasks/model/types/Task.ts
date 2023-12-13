import { Moment } from 'moment'

export enum TaskType {
  ALL = 'all',
  CURRENT = 'current',
  COMPLETED = 'completed',
  OVERDUE = 'overdue',
  DEFERRED = 'deferred',
}
export interface Task {
  id?: string
  title: string
  text?: string
  type: TaskType
  startDate: Moment
  deadlineDate?: Moment
  taskId?: string
  tagsIds?: string[]
  isSubtask?: boolean
  tasks?: ResponseTask[]
}

export interface ResponseTask extends Omit<Task, 'id'> {
  id: string
  tasks?: ResponseTask[]
}

export interface TaskDTO {
  task: Task
  subtasks: SubTask[]
  removedSubtasks?: string[]
}

export interface ServerResponse {
  success: boolean
  tasks: ResponseTask[]
}

export type SubTask = Omit<Task, 'tags' | 'tasks'>

export interface TaskWithId extends Omit<Partial<Task>, 'id'> {
  id: string
}
