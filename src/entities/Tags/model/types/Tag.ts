import { TagColor } from '@shared/ui/Tag'

export interface Tag {
  color: TagColor
  id: string
  projectId?: number
  text: string
  userId?: number
}
