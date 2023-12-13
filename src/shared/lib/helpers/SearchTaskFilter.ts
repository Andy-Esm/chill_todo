import { ResponseTask } from '@entities/Tasks'

export function SearchTaskFilter(value: string, data: ResponseTask[]): ResponseTask[] {
  const reg = new RegExp(value, 'mi')
  const filteredTasks =  data?.filter((item) => {
    return reg.test(item.title)
  })
  return filteredTasks
}