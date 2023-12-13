import { object, string } from 'yup'

export const EditTaskSchema = object().shape({
  id: string().optional(),
  subtask: string(),
  text: string(),
  title: string()
    .min(3, 'Название не может быть меньше 3 символов')
    .required('Введите название задачи')
    .max(95, 'Слишком длинный заголовок'),
})
