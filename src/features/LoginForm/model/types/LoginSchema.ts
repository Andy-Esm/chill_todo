import { boolean, object, string } from 'yup'

export const LoginSchema = object({
  email: string().email('Некорректный email').required('Поле обязательно для заполнения'),
  password: string().required('Поле обязательно для заполнения'),
  stayOn: boolean().required()
}).required()