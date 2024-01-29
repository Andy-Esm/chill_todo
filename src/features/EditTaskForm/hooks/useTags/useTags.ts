import { Tag } from '@entities/Tags'
import { useGetTagsQuery } from '@shared/api'
import { useState } from 'react'

export const useTags = (tagsId: string[] | void) => {
  const [taskTags, setTaskTags] = useState<string[]>(tagsId || [])
  const { data: tagsData } = useGetTagsQuery()

  const normalizedTags = tagsData?.reduce((acc: Record<string, Tag>, tag: Tag) => {
    acc[tag.id] = tag
    return acc
  }, {})

  const getTags = (ids: string[] | undefined) => {
    if (!ids) return
    if (normalizedTags && ids?.length > 0) {
      const taskTags = ids.map((id) => normalizedTags[id])
      return taskTags
    }
    return
  }

  const addTag = (tagId: string) => {
    if (taskTags.includes(tagId)) return
    setTaskTags((prevState) => [...prevState, tagId])
  }

  const deleteTag = (id: string) => {
    setTaskTags(taskTags.filter((tag) => tag !== id))
  }

  return { addTag, deleteTag, getTags, normalizedTags, tagsData, taskTags }
}
