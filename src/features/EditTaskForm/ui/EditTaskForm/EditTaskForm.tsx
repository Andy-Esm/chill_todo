import { memo, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import moment from 'moment'

import { Task, TaskDueDate, TaskType } from '@entities/Tasks'
import { useClosePopup } from '@shared/lib/hooks/useClosePopup'
import { TagList } from '@entities/Tags'
import { CustomInput } from '@shared/ui/CustomInput'
import { IconButton } from '@shared/ui/IconButton'
import { FieldError } from '@shared/ui/FieldError'
import { TextArea } from '@shared/ui/TextArea'
import { Calendar } from '@shared/ui/Calendar'
import { Popover } from '@shared/ui/Popover'
import { Button } from '@shared/ui/Button'
import { Title } from '@shared/ui/Title'

import { useTags } from '../../hooks/useTags/useTags'
import { EditTaskSchema } from '../../model/EditTaskSchema'
import { useSubtasks } from '../../hooks/useSubtasks/useSubtasks'
import { SubTasksList } from '../SubTasksList/SubTasksList'

import styles from './EditTaskForm.module.scss'
import { useCreateTaskMutation, useUpdateTaskMutation } from '@shared/api'

export interface TaskEdit {
  id?: string | undefined
  title: string 
  text?: string | undefined
  subtask?: string | undefined
}

interface EditTaskFormProps {
  task?: Task
}

export const EditTaskForm = memo(({task}: EditTaskFormProps) => {
  const deadlineDate = moment(task?.deadlineDate).toDate()
  const [finishDate, setFinishDate] = useState<Date>(deadlineDate ?? new Date)
  const onChangeDate = (e: Date) => setFinishDate(e)
  
  const closeEditTaskForm = useClosePopup()
  const [createTaskItem] = useCreateTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  const {subTasks, addSubtask, changeSubtaskStatus, deleteSubtask, removedSubTasks} = useSubtasks(task)
  const { taskTags, getTags, addTag, deleteTag, tagsData  } = useTags(task?.tagsIds)

  const defaultValues = task ? {...task} : {}
  if ('tasks' in defaultValues ) {
    delete defaultValues.tasks
  }

  const {register, formState: {errors,isValid,}, handleSubmit, watch, setValue} = useForm<TaskEdit>({
    resolver: yupResolver(EditTaskSchema),
    mode: 'onChange',
    defaultValues: task
  })
  
  const dueStartDate = moment(task?.startDate) ?? moment()

  const handleAddSubtask = () => {
    addSubtask(watch('subtask'))
    setValue('subtask', '')
  }

  const onSubmit = async (data: TaskEdit) => {
    const {subtask, ...task}= data //eslint-disable-line
    const taskRequest: Task = {...task as Task, startDate: dueStartDate, deadlineDate: moment(finishDate), type: TaskType.CURRENT, tagsIds: taskTags}
    const subTasksRequest = subTasks.map((task) => ({...task, deadlineDate: moment(finishDate) }))
    task.id 
      ? await updateTask({task: taskRequest, subtasks: subTasksRequest, removedSubtasks: removedSubTasks}) 
      : await createTaskItem({ task: taskRequest, subtasks: subTasks})
    closeEditTaskForm()
  }

  return (
    <form className={styles['edit-task-form']}  onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['edit-task-form-content']}>
        <div className={styles['edit-task-form-header']}>
          <IconButton iconName='icon-arrow-left' size='large' form='circle' style='primary' onClick={closeEditTaskForm} className={styles.arrow}/>
          <span>
            <Calendar readonly={false} setDate={finishDate} onChange={onChangeDate} />
          </span>
        </div>
        <div>
          <div>
            <TextArea name='title' type='title' register={register('title')} placeholder='Название задачи...' className={styles.name} />
            <FieldError>{errors.title?.message}</FieldError>
          </div>
          <TextArea name='text' type='text' register={register('text')} placeholder='Введите текст задачи...'/>
        </div>
        <div>
          <TaskDueDate startDate={dueStartDate} finishDate={moment(finishDate)}/>
        </div>
        <div>
          <Popover renderButton={() => <div><Title tag='h3' fontFamily='main' className={styles.tagstitle}>Теги</Title></div>}
            renderPanel={() => <div className={styles.taglist}>{tagsData && <TagList tagList={tagsData} onAdd={addTag} />}</div>}
            placementPanel='bottom-start' offsetY={8} />
        </div>
        <div className={styles.settags}>
          {taskTags && <TagList tagList={getTags(taskTags)} onClick={deleteTag} />}
        </div>
        <div>
          <Title tag='h3' fontFamily='main' className={styles.subtitle}>Подзадачи</Title>
          <CustomInput type='text' className={styles['subtask-input']} register={register('subtask')}/>
          <Button style='outline' className={styles['add-subtask']} onClick={handleAddSubtask}> Добавить подзадачу </Button>
          <SubTasksList 
            subTasks={subTasks} 
            onCheckboxClick={changeSubtaskStatus}
            checkedStatus = {TaskType.COMPLETED}
            onDelete={deleteSubtask}
          />
        </div>
        <div className={styles['edit-task-form-actions']}>
          <Button size='small' type='submit' style={isValid ? 'accept': 'disabled'} disabled={!isValid}>{`${task ? 'Обновить ' : 'Создать'} задачу`}</Button>
          <Button style='cancel' size='small' onClick={closeEditTaskForm}>Отмена</Button>
        </div>
      </div>
    
    </form>
  )
})