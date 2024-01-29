import { useDebounce } from '@shared/lib/hooks/debounceSearch'
import { IconFont } from '@shared/ui/IconFont'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import styles from './Search.module.scss'

interface ISearchProps {
  delay: number
  onChange?: (value: string) => void
  placeholder?: string
}

export const Search = ({ delay, onChange, placeholder }: ISearchProps) => {
  const [value, setValue] = useState('')
  const [isActive, setIsActive] = useState(false)

  const debounced = useDebounce(value, delay)

  useEffect(() => {
    onChange?.(debounced)
  }, [debounced])

  const setActiveClass = () => {
    const isOpen = isActive ? styles['active'] : ''
    return classNames(styles['tasks-search'], isOpen)
  }

  const handleIsActive = () => {
    setIsActive(!isActive)
    cleanValue()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const cleanValue = () => {
    onChange?.('')
    setValue('')
  }

  return (
    <div className={setActiveClass()}>
      <div className={styles['search-icon']} onClick={handleIsActive}>
        <IconFont color='primary' iconName='icon-search' />
      </div>
      <div className={styles['search-input']}>
        <input onInput={handleChange} placeholder={placeholder} type='text' value={value} />
      </div>
      {value && (
        <div className={styles['clean-icon']} onClick={cleanValue}>
          <IconFont color='default' iconName='icon-close' />
        </div>
      )}
    </div>
  )
}

export default Search
