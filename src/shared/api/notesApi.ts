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

    getNotes: build.query<Notes[], void>({
      query: () => ({
        method: 'GET',
        url: 'notes',
      }),
    }),
  }),
})

export const { useCreateNoteMutation, useGetNotesQuery } = notesApi
