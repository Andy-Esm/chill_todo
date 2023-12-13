import { User } from '@entities/User'
import { rtkApi } from '@shared/api'

export const registerApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<void, User>({
      query: (user) => ({
        url: '/register',
        method: 'Post',
        body: user
      })
    })
  })
})

export const { useRegisterMutation } = registerApi