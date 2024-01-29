import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface ExtraOptionsWithDelay {
  delay?: number
}

const url = process.env.BASE_URL_API
const parsingCookie = (name: string) => {
  const cookies = document.cookie
  const arrCookies = cookies.split('; ')
  const authCookie = arrCookies.find((el) => el.includes(name))
  if (authCookie) {
    return authCookie.split('=')[1]
  } else {
    return ''
  }
}
const token = parsingCookie('token')

const baseQuery = fetchBaseQuery({
  baseUrl: `${url}`,
  prepareHeaders: (headers) => {
    headers.set('authorization', `Bearer ${token ?? ''}`)
    return headers
  },
})

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
