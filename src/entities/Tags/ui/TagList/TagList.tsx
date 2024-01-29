import { IconButton } from '@shared/ui/IconButton'
import { TagColor, Tag as TagComponent } from '@shared/ui/Tag'
import classNames from 'classnames'
import { Tag } from '../../model/types/Tag'
import styles from './TagList.module.scss'

interface TagListProps {
  onAdd?: (tagId: string) => void
  onClick?: (tagId: string) => void
  tagList: Tag[] | undefined
}

export const TagList = ({ onAdd, onClick, tagList }: TagListProps) => {
  const getWrappcolor = (color: TagColor) => {
    const tagWrappColor = styles[`tagwrapp-${color}`]
    return classNames(styles.tagwrapp, tagWrappColor)
  }

  return (
    <>
      {tagList &&
        tagList?.map((tag) => (
          <div className={getWrappcolor(tag.color)} key={tag.id}>
            <TagComponent color={tag.color} onClick={() => onAdd?.(tag?.id)} transparent>
              {tag.text}
            </TagComponent>
            {onClick && (
              <IconButton
                className={styles.deletebtn}
                form='rounded'
                iconName='icon-close'
                onClick={() => onClick(tag.id)}
                style='error'
              />
            )}
          </div>
        ))}
    </>
  )
}
