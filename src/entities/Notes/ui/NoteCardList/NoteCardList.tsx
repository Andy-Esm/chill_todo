import { memo } from 'react'
import { NoteCard } from '../NoteCard/NoteCard'

export const NoteCardList = memo(() => {
  return (
    <div>
      <NoteCard />
      <NoteCard />
    </div>
  )
})

NoteCardList.displayName = 'NoteCardList'
