import { TagColor } from '@shared/ui/Tag'

export interface Tag {
  id: string
  text: string
  color: TagColor
  projectId?: number
  userId?: number
}