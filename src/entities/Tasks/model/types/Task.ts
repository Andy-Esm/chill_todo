import { Moment } from 'moment'

export enum TaskType {
  ALL = 'all',
  COMPLETED = 'completed',
  CURRENT = 'current',
  DEFERRED = 'deferred',
  OVERDUE = 'overdue',
}
export interface Task {
  deadlineDate?: Moment
  id?: string
  isSubtask?: boolean
  startDate: Moment
  tagsIds?: string[]
  taskId?: string //id родительской
  tasks?: ResponseTask[] //массив подзадач
  text?: string
  title: string
  type: TaskType
}

export interface ResponseTask extends Omit<Task, 'id'> {
  id: string
  tasks?: ResponseTask[]
}

export interface TaskDTO {
  removedSubtasks?: string[]
  subtasks: SubTask[]
  task: Task
}

export interface ServerResponse {
  success: boolean
  tasks: ResponseTask[]
}

export type SubTask = Omit<Task, 'tags' | 'tasks'>

export interface TaskWithId extends Omit<Partial<Task>, 'id'> {
  id: string
}
