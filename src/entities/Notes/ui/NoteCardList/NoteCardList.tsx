import { AddNoteCard } from '@entities/Notes'
import { NoteCardSkeleton } from '@entities/Notes/ui/NoteCard/NoteCardSceleton/NoteCardSceleton'
import { Grid } from '@shared/ui/Grid'
import { memo } from 'react'
import { NoteCard } from '../NoteCard/NoteCard'

interface NoteCardListProps {
  isLoading: boolean
}

export const NoteCardList = memo(({ isLoading }: NoteCardListProps) => {
  return (
    <Grid autoFlow='dense' colWidth={224} columns={3} gap={24}>
      {isLoading && (
        <>
          <NoteCardSkeleton />
          <NoteCardSkeleton />
          <NoteCardSkeleton />
        </>
      )}
      <NoteCard />
      <NoteCard />
      <AddNoteCard />
    </Grid>
  )
})

NoteCardList.displayName = 'NoteCardList'
