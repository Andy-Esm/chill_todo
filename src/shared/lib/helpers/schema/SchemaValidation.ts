import * as yup from 'yup'

export const SchemaValidation = yup.object().shape({
  acceptTerms: yup.bool().oneOf([true], 'Примите пользовательское соглашение'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Введите пароль еще раз'),
  email: yup.string().email('Введите корректный Email').required('Введите ваш Email'),
  name: yup.string().required('Введите ваше имя'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Введите пароль'),
  title: yup.string().required('Введите название задачи'),
})
