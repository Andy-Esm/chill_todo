import { AddNoteCard } from '@entities/Notes'
import { Grid } from '@shared/ui/Grid'
import { memo } from 'react'
import { NoteCard } from '../NoteCard/NoteCard'

export const NoteCardList = memo(() => {
  return (
    <Grid autoFlow='dense' colWidth={224} columns={3} gap={24}>
      <NoteCard />
      <NoteCard />
      <AddNoteCard />
    </Grid>
  )
})

NoteCardList.displayName = 'NoteCardList'
