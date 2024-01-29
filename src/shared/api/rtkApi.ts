import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { baseQueryWithDelay } from '@shared/lib/middlewares/delayRTKMiddleware/delayRTKMiddleware'

export const rtkApi = createApi({
  baseQuery: baseQueryWithDelay,
  endpoints: () => ({}),
  reducerPath: 'rtkApi',
})
