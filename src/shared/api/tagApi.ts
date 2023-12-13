import { Tag } from '@entities/Tags'
import { rtkApi } from './rtkApi'

const tagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getTags: build.query<Tag[], void>({
      query: () => 'tags',
    }),
  }),
})

export const { useGetTagsQuery } = tagsApi
