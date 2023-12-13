import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './CustomInput.module.scss'

type InputType = 'email' | 'number' | 'password' | 'text'

interface InputProps {
  className?: string
  id?: string
  label?: string
  name?: string
  register?: UseFormRegisterReturn<string>
  type: InputType
}

export const CustomInput = ({ className, id, label, name, register, type }: InputProps) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={classNames(styles.input, className)}
        name={name}
        type={type}
        {...register}
      />
    </>
  )
}
