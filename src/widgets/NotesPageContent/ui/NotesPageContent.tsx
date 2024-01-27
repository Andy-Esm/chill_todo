import { NoteCardList } from '@entities/Notes'
import { useGetNotesQuery } from '@shared/api'

export const NotesPageContent = () => {
  const { data: notes, isLoading: notesLoading } = useGetNotesQuery()
  return (
    <>
      <NoteCardList isLoading={notesLoading} />
    </>
  )
}
