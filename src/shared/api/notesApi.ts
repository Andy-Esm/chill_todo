import { Notes } from '@entities/Notes/model/types/Notes'
import { rtkApi } from './rtkApi'

const notesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createNote: build.mutation<Notes, Notes>({
      query: (note) => ({
        body: note,
        method: 'POST',
        url: 'notes/new-note',
      }),
    }),

    deleteNote: build.mutation<void, string>({
      query: (id) => ({
        method: 'DELETE',
        url: `notes/${id}`,
      }),
    }),
    getNotes: build.query<Notes[], void>({
      query: () => ({
        method: 'GET',
        url: 'notes',
      }),
    }),
  }),
})

export const { useCreateNoteMutation, useDeleteNoteMutation, useGetNotesQuery } = notesApi
