import { forwardRef } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
registerLocale('ru', ru)

import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import styles from './Calendar.module.scss'
import { IconFont } from '../IconFont'

interface CalendarProps {
  setDate: Date
  readonly?: boolean
  onChange: (value: Date) => void
}

type CustomCalendarProps = React.HTMLProps<HTMLDivElement>
const CustomInput = forwardRef<HTMLDivElement, CustomCalendarProps>(function CustomInput({ value, onClick } , ref) {
  return (
    <div className={styles['custom-input']} onClick={onClick} ref={ref}>
      <span>
        <IconFont iconName='icon-calendar' className={styles.calendar}/>
      </span>
      {value}
    </div>
  )
})

export const Calendar = ({ setDate, readonly, onChange }: CalendarProps) => {
  const handleChange = (e: Date) => {
    onChange(e)
  }
  const today = new Date()

  return (
    <DatePicker
      selected={setDate}
      dateFormat='dd MMMM yyyy'
      onChange={handleChange}
      minDate={today}
      disabled={readonly}
      locale='ru'
      customInput={<CustomInput />}
      popperPlacement='bottom-start'
      popperModifiers={[
        {
          name: 'offset',
          options: {
            offset: [-90, 10],
          }
        },
      ]}
    />
  )
}