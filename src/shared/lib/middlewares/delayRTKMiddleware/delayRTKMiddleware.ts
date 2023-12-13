import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface ExtraOptionsWithDelay {
  delay?: number
}
const url = process.env.BASE_URL_API

const baseQuery = fetchBaseQuery({ baseUrl: `${url}` })

export const baseQueryWithDelay: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError,
  ExtraOptionsWithDelay
> = async (args, api, extraOptions) => {
  return new Promise((resolve) => {
    setTimeout(async () => resolve(await baseQuery(args, api, extraOptions)), 0)
  })
}
