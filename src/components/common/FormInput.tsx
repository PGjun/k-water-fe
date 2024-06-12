import { Icon } from '@/svgs/icons'
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldValues, Path, RefCallBack } from 'react-hook-form'
import { ko } from 'date-fns/locale'

export const Input = ({
  flex,
  children,
}: {
  flex: 'row' | 'col'
  children: ReactNode
}) => {
  const flexTypes = {
    row: 'flex gap-[12px] self-stretch',
    col: 'flex flex-col gap-[12px] self-stretch',
  }

  return <div className={flexTypes[flex]}>{children}</div>
}

const Label = ({
  text,
  required = false,
}: {
  text: string
  required?: boolean
}) => {
  return (
    <div className="whitespace-nowrap text-[14px] font-semibold leading-[90%] md:text-[16px]">
      {required && <span className="text-[#ff3819]">* </span>}
      <span className="text-[#333]">{text}</span>
    </div>
  )
}

const Password = ({
  value,
  onChange,
  placeholder,
  onBlur,
  inputRef,
}: {
  value: string
  onChange: ChangeEventHandler
  placeholder: string
  onBlur?: FocusEventHandler
  inputRef?: RefCallBack
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        value={value ?? ''}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="h-[41px] w-full rounded-[4px] border border-[#c4c4c4] bg-[#fff] px-[16px] pr-[40px] text-[12px] placeholder:text-[#c4c4c4] md:h-[44px] md:text-[14px]"
      />
      <div
        className="absolute right-[15px] top-[10px] md:top-[12px]"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Icon.EyeOn /> : <Icon.EyeOff />}
      </div>
    </div>
  )
}

const Text = ({
  value,
  onChange,
  placeholder,
  inputRef,
}: {
  value: string
  onChange: ChangeEventHandler
  placeholder: string
  inputRef?: RefCallBack
}) => {
  return (
    <input
      type="text"
      ref={inputRef}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder}
      className="h-[41px] w-full rounded-[4px] border border-[#c4c4c4] bg-[#fff] px-[16px] text-[12px] placeholder:text-[#c4c4c4] md:h-[44px] md:text-[14px]"
    />
  )
}

interface DatePickerProps {
  value: Date | null
  onChange: (date: Date | null) => void
  placeholder: string
  inputRef?: RefCallBack
}

const DatePicker = ({
  value,
  onChange,
  placeholder,
  inputRef,
}: DatePickerProps) => {
  const handleDate = (date: any) => {
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
        dropdownMode="select"
        showYearDropdown
        showMonthDropdown
        dateFormatCalendar="yyyy년 M월"
        locale={ko}
        selected={value}
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

const Wrapper = ({
  flex,
  children,
}: {
  flex: 'row' | 'col'
  children: ReactNode
}) => {
  const flexTypes = {
    row: 'flex gap-[8px]',
    col: 'flex flex-col gap-[8px]',
  }
  return <div className={flexTypes[flex]}>{children}</div>
}

const Button = ({
  text,
  onClick,
}: {
  text: string
  onClick?: MouseEventHandler
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[41px] w-[112px] shrink-0 flex-row items-center justify-center rounded-[4px] border-[1px] border-[#888] bg-[#fff] px-[28px] py-[12px] md:h-[44px]"
    >
      <div className="whitespace-nowrap text-[12px] font-bold text-[#4a4a4a] md:text-[14px]">
        {text}
      </div>
    </button>
  )
}

const RadioBox = <T extends FieldValues>({
  name,
  options,
  value,
  onChange,
}: {
  name: Path<T>
  options: { value: string }[]
  value: string
  onChange: ChangeEventHandler
}) => {
  return (
    <div className="flex gap-[12px]">
      {options.map((option, idx) => {
        const baseStyle =
          'flex h-[41px] flex-1 flex-row items-center justify-center rounded-[4px] text-[14px]  px-[28px] py-[12px]'

        const styles = {
          on: 'text-[#fff] bg-[#4a4a4a]',
          of: 'border text-[#4a4a4a] border-[#c4c4c4] bg-[#fff]',
        }

        return (
          <div key={idx} className="relative w-full">
            <label
              htmlFor={option.value}
              className={`${baseStyle} ${option.value === value ? styles.on : styles.of}`}
            >
              {option.value}
            </label>
            <input
              type="radio"
              id={option.value}
              value={option.value}
              checked={option.value === value}
              name={name}
              onChange={onChange}
              className="absolute top-0 opacity-0" // focus를 위해서 hidden대신 opacity 사용 - DOM에 남겨놓는다
            />
          </div>
        )
      })}
    </div>
  )
}

Input.Label = Label
Input.Text = Text
Input.Wrapper = Wrapper
Input.Button = Button
Input.RadioBox = RadioBox
Input.Password = Password
Input.DatePicker = DatePicker
