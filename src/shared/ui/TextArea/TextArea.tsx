import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './TextArea.module.scss'
import classNames from 'classnames'

export interface TextAreaProps {
  className?: string
  name: 'title' | 'text'
  type?: 'title' | 'text'
  placeholder?: string
  register?: UseFormRegisterReturn<string>
}

export const TextArea = ({ name, type, placeholder, register, className }: TextAreaProps) => {

  const textareaType = styles[`custom-area-${type}`]
  const textareaStyles = classNames(styles['custom-area'], textareaType, className)

  return (
    <textarea
      name={name}
      className={textareaStyles}
      {...register}
      placeholder={placeholder}

    />
  )
}
