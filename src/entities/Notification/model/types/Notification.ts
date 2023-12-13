export enum NotificationTag {
  TASK = 'task',
}

export interface Notification {
  id?: string
  isRead?: boolean
  tag: NotificationTag
  taskId: string
  text: string
  user?: string
}
