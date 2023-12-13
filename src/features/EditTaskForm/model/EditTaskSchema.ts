import {object, string} from 'yup'

export const EditTaskSchema = object().shape({
  title: string()
    .min(3, 'Название не может быть меньше 3 символов')
    .required('Введите название задачи')
    .max(95, 'Слишком длинный заголовок'),
  text: string(),
  subtask: string(),
  id: string().optional()
})
