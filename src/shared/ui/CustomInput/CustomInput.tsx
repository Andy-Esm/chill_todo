import {  UseFormRegisterReturn } from 'react-hook-form'
import styles from './CustomInput.module.scss'
import classNames from 'classnames'

type InputType = 'text' | 'email' | 'password' | 'number';

interface InputProps {
  name?: string
  className?: string
  type: InputType;
  id?: string
  label?: string;
  register?: UseFormRegisterReturn<string>
}

export const CustomInput = ({ type, label, register, id, className, name}: InputProps) => {

  return (
    <>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        className={classNames(styles.input, className)}
        name={name}
        type={type}
        {...register}
      />
    </>
  )
}

