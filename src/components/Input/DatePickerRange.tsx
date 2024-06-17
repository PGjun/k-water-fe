import { DatePickerRangeProps } from '@/types/input'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/locale'
import { Icon } from '@/svgs/icons'

export const DatePickerRange = ({
  value,
  onChange,
  placeholder,
  inputRef,
}: DatePickerRangeProps) => {
  const [start, end] = value
  const handleDate = (date: [Date | null, Date | null]) => {
    onChange(date)
  }
  const currentYear = new Date().getFullYear()
  const maxYear = currentYear + 5
  return (
    <div className="relative w-full">
      <ReactDatePicker
        ref={(elem) => {
          elem && inputRef && inputRef((elem as any).input)
        }}
        onFocus={(e) => (e.target.readOnly = true)}
        selectsRange={true}
        startDate={start}
        endDate={end}
        dropdownMode="select"
        showYearDropdown
        showMonthDropdown
        dateFormatCalendar="yyyy년 M월"
        locale={ko}
        onChange={(date) => handleDate(date)}
        dateFormat="yyyy/MM/dd"
        placeholderText={placeholder}
        minDate={new Date(1900, 0, 1)} // 100년 전 1월 1일
        maxDate={new Date(maxYear, 11, 31)} // 100년 후 12월 31일
        className="h-[41px] w-full rounded-[4px] border border-[#c4c4c4] bg-[#fff] px-[16px] text-[12px] placeholder:text-[#c4c4c4] md:h-[44px] md:text-[14px]"
      />
      <div className="absolute right-[15px] top-[12px] md:top-[14px]">
        <Icon.Date />
      </div>
    </div>
  )
}
