import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './TextArea.module.scss'

export interface TextAreaProps {
  className?: string
  name: 'text' | 'title'
  placeholder?: string
  register?: UseFormRegisterReturn<string>
  type?: 'text' | 'title'
}

export const TextArea = ({ className, name, placeholder, register, type }: TextAreaProps) => {
  const textareaType = styles[`custom-area-${type}`]
  const textareaStyles = classNames(styles['custom-area'], textareaType, className)

  return <textarea className={textareaStyles} name={name} {...register} placeholder={placeholder} />
}
