import { rtkApi } from './rtkApi'
import { ResponseTask, Task, TaskDTO, TaskWithId } from '@entities/Tasks'

const taskApi = rtkApi.enhanceEndpoints({ addTagTypes: ['tasks'] }).injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<ResponseTask[], void>({
      query: () => 'tasks',
      providesTags: ['tasks'],
    }),

    createTask: build.mutation<Task, Omit<TaskDTO, 'id'>>({
      query: (task) => ({
        url: 'tasks/new-tasks',
        method: 'POST',
        body: task,
      }),
      invalidatesTags: ['tasks'],
    }),

    createSomeTasks: build.mutation<Task[], Omit<Task, 'id'>[]>({
      query: (tasks) => ({
        url: 'tasks',
        method: 'POST',
        body: tasks,
      }),
      invalidatesTags: ['tasks'],
    }),

    deleteTask: build.mutation<void, string>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['tasks'],
    }),

    deleteSomeTasks: build.mutation<void, TaskWithId[]>({
      query: (tasks) => ({
        url: 'tasks',
        method: 'DELETE',
        body: tasks,
      }),
      invalidatesTags: ['tasks'],
    }),

    updateTask: build.mutation<Task, TaskDTO>({
      query: (DTO) => ({
        url: `tasks/${DTO.task.id}`,
        method: 'PUT',
        body: DTO,
      }),
      invalidatesTags: ['tasks'],
    }),

    updateTaskStatus: build.mutation<Task, Task>({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: 'PATCH',
        body: task,
      }),
      invalidatesTags: ['tasks'],
    }),

    updateSomeTasks: build.mutation<Task[], Task[]>({
      query: (tasks) => ({
        url: 'tasks',
        method: 'PUT',
        body: tasks,
      }),
      invalidatesTags: ['tasks'],
    }),
  }),
})

export const {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useCreateSomeTasksMutation,
  useDeleteSomeTasksMutation,
  useUpdateSomeTasksMutation,
  useUpdateTaskStatusMutation,
} = taskApi
