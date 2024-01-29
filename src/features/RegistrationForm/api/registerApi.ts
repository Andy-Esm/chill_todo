import { User } from '@entities/User'
import { rtkApi } from '@shared/api'

export const registerApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<void, User>({
      query: (user) => ({
        body: user,
        method: 'Post',
        url: '/users/register',
      }),
    }),
  }),
})

export const { useRegisterMutation } = registerApi
