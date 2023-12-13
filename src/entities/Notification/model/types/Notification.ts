export enum NotificationTag {
  TASK = 'task',
}

export interface Notification {
  id?: string
  user?: string
  text: string
  tag: NotificationTag
  taskId: string
  isRead?: boolean
}
