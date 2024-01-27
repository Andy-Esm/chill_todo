import { Notes } from '@entities/Notes'
import { NoteCard, NoteCardList } from '@entities/Notes'
import { NotesCardActions } from '@features/NotesCardActions'
import { useGetNotesQuery } from '@shared/api'

export const NotesPageContent = () => {
  const { data: notes, isLoading: notesLoading } = useGetNotesQuery()
  const addNote = () => {
    console.log('addNote')
  }
  return (
    <>
      <NoteCardList
        addNote={addNote}
        isLoading={notesLoading}
        notes={notes}
        renderNote={(note: Notes) => (
          <div key={note.id}>
            <NoteCard
              note={note}
              onClick={() => {}}
              renderActions={(note) => <NotesCardActions note={note} />}
            />
          </div>
        )}
      />
    </>
  )
}
