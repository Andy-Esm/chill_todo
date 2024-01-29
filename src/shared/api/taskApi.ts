import { ResponseTask, Task, TaskDTO, TaskWithId } from '@entities/Tasks'
import { rtkApi } from './rtkApi'

const taskApi = rtkApi.enhanceEndpoints({ addTagTypes: ['tasks'] }).injectEndpoints({
  endpoints: (build) => ({
    createSomeTasks: build.mutation<Task[], Omit<Task, 'id'>[]>({
      invalidatesTags: ['tasks'],
      query: (tasks) => ({
        body: tasks,
        method: 'POST',
        url: 'tasks',
      }),
    }),

    createTask: build.mutation<Task, Omit<TaskDTO, 'id'>>({
      invalidatesTags: ['tasks'],
      query: (task) => ({
        body: task,
        method: 'POST',
        url: 'tasks/new-tasks',
      }),
    }),

    deleteSomeTasks: build.mutation<void, TaskWithId[]>({
      invalidatesTags: ['tasks'],
      query: (tasks) => ({
        body: tasks,
        method: 'DELETE',
        url: 'tasks',
      }),
    }),

    deleteTask: build.mutation<void, string>({
      invalidatesTags: ['tasks'],
      query: (id) => ({
        method: 'DELETE',
        url: `tasks/${id}`,
      }),
    }),

    getTasks: build.query<ResponseTask[], void>({
      providesTags: ['tasks'],
      query: () => 'tasks',
    }),

    updateSomeTasks: build.mutation<Task[], Task[]>({
      invalidatesTags: ['tasks'],
      query: (tasks) => ({
        body: tasks,
        method: 'PUT',
        url: 'tasks',
      }),
    }),

    updateTask: build.mutation<Task, TaskDTO>({
      invalidatesTags: ['tasks'],
      query: (DTO) => ({
        body: DTO,
        method: 'PUT',
        url: `tasks/${DTO.task.id}`,
      }),
    }),

    updateTaskStatus: build.mutation<Task, Task>({
      invalidatesTags: ['tasks'],
      query: (task) => ({
        body: task,
        method: 'PATCH',
        url: `tasks/${task.id}`,
      }),
    }),
  }),
})

export const {
  useCreateSomeTasksMutation,
  useCreateTaskMutation,
  useDeleteSomeTasksMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateSomeTasksMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
} = taskApi
