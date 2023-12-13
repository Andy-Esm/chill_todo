import ru from 'date-fns/locale/ru'
import { forwardRef } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
registerLocale('ru', ru)

import { IconFont } from '../IconFont'
import styles from './Calendar.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

interface CalendarProps {
  onChange: (value: Date) => void
  readonly?: boolean
  setDate: Date
}

type CustomCalendarProps = React.HTMLProps<HTMLDivElement>
const CustomInput = forwardRef<HTMLDivElement, CustomCalendarProps>(function CustomInput(
  { onClick, value },
  ref,
) {
  return (
    <div className={styles['custom-input']} onClick={onClick} ref={ref}>
      <span>
        <IconFont className={styles.calendar} iconName='icon-calendar' />
      </span>
      {value}
    </div>
  )
})

export const Calendar = ({ onChange, readonly, setDate }: CalendarProps) => {
  const handleChange = (e: Date) => {
    onChange(e)
  }
  const today = new Date()

  return (
    <DatePicker
      customInput={<CustomInput />}
      dateFormat='dd MMMM yyyy'
      disabled={readonly}
      locale='ru'
      minDate={today}
      onChange={handleChange}
      popperModifiers={[
        {
          name: 'offset',
          options: {
            offset: [-90, 10],
          },
        },
      ]}
      popperPlacement='bottom-start'
      selected={setDate}
    />
  )
}
