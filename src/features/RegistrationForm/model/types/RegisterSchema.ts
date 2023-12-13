import { boolean, object, ref, string } from 'yup'

export const RegisterSchema = object({
  name: string().min(4, 'Имя должно быть не менее 4 символов').required(),
  email: string().email('Некорректный email').required('Поле обязательно для заполнения'),
  password: string().min(5, 'Длина пароля должна быть не менее 5 символов').required(),
  confirmPassword: string().oneOf([ref('password'), undefined], 'Пароли не совпадают').required(),
  confirm: boolean().oneOf([true], undefined).required()
}).required()