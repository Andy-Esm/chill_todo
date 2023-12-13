import classNames from 'classnames'
import { ChangeEvent, ForwardedRef, ReactNode, forwardRef } from 'react'
import { FieldValues, Path } from 'react-hook-form'
import styles from './Checkbox.module.scss'
interface CheckboxProps<T extends FieldValues> {
  checked?: boolean
  className?: string
  crossout?: boolean
  disabled?: boolean
  name: Path<T>
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  text: ReactNode | string
  value?: string
}

export const Checkbox = forwardRef(function Checkbox<T extends FieldValues>(
  props: CheckboxProps<T>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const {
    checked,
    className,
    crossout = true,
    disabled = false,
    name,
    onChange,
    text,
    value,
  } = props

  const customCheckboxStyles = classNames(styles['custom-checkbox'], {
    [styles.crossout]: crossout,
    [styles.disabled]: disabled,
  })

  return (
    <label className={classNames(styles.label, className)}>
      <input
        checked={checked}
        className={classNames(styles.checkbox)}
        disabled={disabled}
        id={name}
        name={name}
        onChange={(e) => onChange?.(e)}
        ref={ref}
        type='checkbox'
        value={value}
      />
      <span className={customCheckboxStyles}>{text}</span>
    </label>
  )
})
