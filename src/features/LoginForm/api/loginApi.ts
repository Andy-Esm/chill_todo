import { rtkApi } from '@shared/api';
import { Login } from '../model/types/login';

export const loginApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    loginByEmail: build.mutation<void, Login>({
      query: (user) => ({
        body: user,
        method: 'Post',
        url: '/users/login',
      }),
    }),
  }),
});

export const { useLoginByEmailMutation } = loginApi;