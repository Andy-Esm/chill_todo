import { AddNoteCard, Notes } from '@entities/Notes'
import { NoteCardSkeleton } from '@entities/Notes/ui/NoteCard/NoteCardSkeleton/NoteCardSkeleton'
import { Grid } from '@shared/ui/Grid'
import { ReactNode, memo, useCallback } from 'react'

interface NoteCardListProps {
  addNote?: () => void
  isLoading: boolean
  notes?: Notes[]
  renderNote: (item: Notes) => ReactNode
}

export const NoteCardList = memo(({ addNote, isLoading, notes, renderNote }: NoteCardListProps) => {
  const handlerAddNoteClick = useCallback(() => {
    addNote?.()
  }, [])
  return (
    <Grid autoFlow='dense' colWidth={224} columns={3} gap={24}>
      {isLoading && (
        <>
          <NoteCardSkeleton />
          <NoteCardSkeleton />
          <NoteCardSkeleton />
        </>
      )}
      {notes && notes.map(renderNote)}
      <AddNoteCard onClick={handlerAddNoteClick} />{' '}
    </Grid>
  )
})

NoteCardList.displayName = 'NoteCardList'
