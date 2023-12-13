import { boolean, object, ref, string } from 'yup'

export const RegisterSchema = object({
  confirm: boolean().oneOf([true], undefined).required(),
  confirmPassword: string()
    .oneOf([ref('password'), undefined], 'Пароли не совпадают')
    .required(),
  email: string().email('Некорректный email').required('Поле обязательно для заполнения'),
  name: string().min(4, 'Имя должно быть не менее 4 символов').required(),
  password: string().min(5, 'Длина пароля должна быть не менее 5 символов').required(),
}).required()
