import { TagList } from '@entities/Tags'
import { Task, TaskDueDate, TaskType } from '@entities/Tasks'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCreateTaskMutation, useUpdateTaskMutation } from '@shared/api'
import { useClosePopup } from '@shared/lib/hooks/useClosePopup'
import { Button } from '@shared/ui/Button'
import { Calendar } from '@shared/ui/Calendar'
import { CustomInput } from '@shared/ui/CustomInput'
import { FieldError } from '@shared/ui/FieldError'
import { IconButton } from '@shared/ui/IconButton'
import { Popover } from '@shared/ui/Popover'
import { TextArea } from '@shared/ui/TextArea'
import { Title } from '@shared/ui/Title'
import moment from 'moment'
import { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSubtasks } from '../../hooks/useSubtasks/useSubtasks'
import { useTags } from '../../hooks/useTags/useTags'
import { EditTaskSchema } from '../../model/EditTaskSchema'
import { SubTasksList } from '../SubTasksList/SubTasksList'
import styles from './EditTaskForm.module.scss'

export interface TaskEdit {
  id?: string | undefined
  subtask?: string | undefined
  text?: string | undefined
  title: string
}

interface EditTaskFormProps {
  task?: Task
}

export const EditTaskForm = memo(({ task }: EditTaskFormProps) => {
  const deadlineDate = moment(task?.deadlineDate).toDate()
  const [finishDate, setFinishDate] = useState<Date>(deadlineDate ?? new Date())
  const onChangeDate = (e: Date) => setFinishDate(e)

  const closeEditTaskForm = useClosePopup()
  const [createTaskItem] = useCreateTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  const { addSubtask, changeSubtaskStatus, deleteSubtask, removedSubTasks, subTasks } =
    useSubtasks(task)
  const { addTag, deleteTag, getTags, tagsData, taskTags } = useTags(task?.tagsIds)

  const defaultValues = task ? { ...task } : {}
  if ('tasks' in defaultValues) {
    delete defaultValues.tasks
  }

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm<TaskEdit>({
    defaultValues: task,
    mode: 'onChange',
    resolver: yupResolver(EditTaskSchema),
  })

  const dueStartDate = moment(task?.startDate) ?? moment()

  const handleAddSubtask = () => {
    addSubtask(watch('subtask'))
    setValue('subtask', '')
  }

  const onSubmit = async (data: TaskEdit) => {
    const { subtask, ...task } = data //eslint-disable-line
    const taskRequest: Task = {
      ...(task as Task),
      deadlineDate: moment(finishDate),
      startDate: dueStartDate,
      tagsIds: taskTags,
      type: TaskType.CURRENT,
    }
    const subTasksRequest = subTasks.map((task) => ({ ...task, deadlineDate: moment(finishDate) }))
    task.id
      ? await updateTask({
          removedSubtasks: removedSubTasks,
          subtasks: subTasksRequest,
          task: taskRequest,
        })
      : await createTaskItem({ subtasks: subTasks, task: taskRequest })
    closeEditTaskForm()
  }

  return (
    <form className={styles['edit-task-form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['edit-task-form-content']}>
        <div className={styles['edit-task-form-header']}>
          <IconButton
            className={styles.arrow}
            form='circle'
            iconName='icon-arrow-left'
            onClick={closeEditTaskForm}
            size='large'
            style='primary'
          />
          <span>
            <Calendar onChange={onChangeDate} readonly={false} setDate={finishDate} />
          </span>
        </div>
        <div>
          <div>
            <TextArea
              className={styles.name}
              name='title'
              placeholder='Название задачи...'
              register={register('title')}
              type='title'
            />
            <FieldError>{errors.title?.message}</FieldError>
          </div>
          <TextArea
            name='text'
            placeholder='Введите текст задачи...'
            register={register('text')}
            type='text'
          />
        </div>
        <div>
          <TaskDueDate finishDate={moment(finishDate)} startDate={dueStartDate} />
        </div>
        <div>
          <Popover
            offsetY={8}
            placementPanel='bottom-start'
            renderButton={() => (
              <div>
                <Title className={styles.tagstitle} fontFamily='main' tag='h4'>
                  Теги
                </Title>
              </div>
            )}
            renderPanel={() => (
              <div className={styles.taglist}>
                {tagsData && <TagList onAdd={addTag} tagList={tagsData} />}
              </div>
            )}
          />
        </div>
        <div className={styles.settags}>
          {taskTags && <TagList onClick={deleteTag} tagList={getTags(taskTags)} />}
        </div>
        <div>
          <Title className={styles.subtitle} fontFamily='main' tag='h4'>
            Подзадачи
          </Title>
          <CustomInput
            className={styles['subtask-input']}
            register={register('subtask')}
            type='text'
          />
          <Button className={styles['add-subtask']} onClick={handleAddSubtask} style='outline'>
            {' '}
            Добавить подзадачу{' '}
          </Button>
          <SubTasksList
            checkedStatus={TaskType.COMPLETED}
            onCheckboxClick={changeSubtaskStatus}
            onDelete={deleteSubtask}
            subTasks={subTasks}
          />
        </div>
        <div className={styles['edit-task-form-actions']}>
          <Button
            disabled={!isValid}
            size='small'
            style={isValid ? 'accept' : 'disabled'}
            type='submit'
          >{`${task ? 'Обновить ' : 'Создать'} задачу`}</Button>
          <Button onClick={closeEditTaskForm} size='small' style='cancel'>
            Отмена
          </Button>
        </div>
      </div>
    </form>
  )
})

EditTaskForm.displayName = 'EditTaskForm'
