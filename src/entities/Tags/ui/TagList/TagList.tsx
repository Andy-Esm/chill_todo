import { TagColor, Tag as TagComponent } from '@shared/ui/Tag'
import { IconButton } from '@shared/ui/IconButton'

import { Tag } from '../../model/types/Tag'

import classNames from 'classnames'
import styles from './TagList.module.scss'

interface TagListProps {
  tagList: Tag[] | undefined
  onClick?: (tagId: string) => void
  onAdd?: (tagId: string) => void
}

export const TagList = ({tagList, onAdd, onClick}: TagListProps) => {

  const getWrappcolor = (color: TagColor) => {
    const tagWrappColor = styles[`tagwrapp-${color}`]
    return classNames(styles.tagwrapp, tagWrappColor)
  }

  return (
    <>
      {tagList && tagList?.map(tag =>
        <div key={tag.id} className={getWrappcolor(tag.color)}>
          <TagComponent
            color={tag.color}
            transparent
            onClick={()=> onAdd?.(tag?.id)}>
            {tag.text}
          </TagComponent>
          {onClick && <IconButton form='rounded' iconName='icon-close' onClick={()=> onClick(tag.id)} style='error' className={styles.deletebtn} />}
        </div>
      )
      }
    </>
  )
}