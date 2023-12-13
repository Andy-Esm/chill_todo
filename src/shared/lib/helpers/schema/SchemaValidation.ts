import * as yup from 'yup'

export const SchemaValidation = yup.object().shape({
  title: yup.string().required('Введите название задачи'),
  name: yup.string().required('Введите ваше имя'),
  email: yup
    .string()
    .email('Введите корректный Email')
    .required('Введите ваш Email'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть не менее 8 символов')
    .required('Введите пароль'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Введите пароль еще раз'),
  acceptTerms: yup.bool().oneOf([true], 'Примите пользовательское соглашение')
})
