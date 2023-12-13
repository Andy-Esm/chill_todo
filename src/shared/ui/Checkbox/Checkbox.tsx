import { ForwardedRef, ReactNode, forwardRef, ChangeEvent } from 'react'
import styles from './Checkbox.module.scss'
import classNames from 'classnames'
import { FieldValues, Path } from 'react-hook-form'
interface CheckboxProps<T extends FieldValues> {
  name: Path<T>
  text: string | ReactNode,
  disabled?: boolean,
  crossout?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  value?: string,
  checked?:boolean
}

export const Checkbox = forwardRef(function Checkbox<T extends FieldValues>(
  props: CheckboxProps<T>,
  ref: ForwardedRef<HTMLInputElement>) {
  const { text, disabled = false, onChange, className, name, value, crossout = true, checked } = props

  const customCheckboxStyles = classNames(styles['custom-checkbox'], {
    [styles.disabled]: disabled,
    [styles.crossout]: crossout
  })


  return (
    <label className={classNames(styles.label, className)}>
      <input
        id={name}
        type='checkbox'
        className={classNames(styles.checkbox)}
        disabled={disabled}
        name={name}
        onChange={(e)=> onChange?.(e)}
        ref={ref}
        value={value}
        checked={checked}
      />
      <span className={customCheckboxStyles}>{text}</span>
    </label>
  )
})
