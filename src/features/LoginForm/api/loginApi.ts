import { Login } from '../model/types/login'
import { rtkApi } from '@shared/api'

export const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loginByEmail: build.mutation<void, Login>({
      query: (user) => ({
        url: '/login',
        method: 'Post',
        body: user
      })
    })
  })
})

export const { useLoginByEmailMutation } = loginApi

