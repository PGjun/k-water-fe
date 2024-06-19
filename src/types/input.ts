import { ChangeEventHandler, FocusEventHandler } from 'react'
import { FieldValues, Path, RefCallBack } from 'react-hook-form'

interface InputProps {
  value: string
  onChange?: ChangeEventHandler
  placeholder: string
  onBlur?: FocusEventHandler
  inputRef?: RefCallBack
}

interface DatePickerProps {
  value: Date | null
  onChange: (date: Date | null) => void
  placeholder: string
  inputRef?: RefCallBack
}

interface DatePickerRangeProps {
  value: [Date | null, Date | null]
  onChange: (date: [Date | null, Date | null]) => void
  placeholder: string
  inputRef?: RefCallBack
}

interface RadioBoxProps<T extends FieldValues> {
  name: Path<T>
  options: { value: string }[]
  value: string
  onChange?: ChangeEventHandler
}

export type { InputProps, DatePickerProps, DatePickerRangeProps, RadioBoxProps }
