import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { useDebounce } from '@shared/lib/hooks/debounceSearch'
import { IconFont } from '@shared/ui/IconFont'

import styles from './Search.module.scss'

interface ISearchProps {
  delay: number
  placeholder?: string
  onChange?: (value: string) => void
}

export const Search = ({ delay, placeholder, onChange }: ISearchProps) => {
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
      <div className={styles['search-icon']} onClick={handleIsActive} >
        <IconFont iconName='icon-search' color='primary' />
      </div>
      <div className={styles['search-input']}>
        <input
          type='text'
          placeholder={placeholder}
          value={value}
          onInput={handleChange}
        />
      </div>
      {value && <div className={styles['clean-icon']} onClick={cleanValue} >
        <IconFont iconName='icon-close' color='default' />
      </div>}
    </div>
  )
}

export default Search
