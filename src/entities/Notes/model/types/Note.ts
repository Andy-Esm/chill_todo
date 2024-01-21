import { Moment } from 'moment'

export interface Notes {
  date: Moment
  id?: string
  text?: string
  title: string
}
