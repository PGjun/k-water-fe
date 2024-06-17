import { Label } from './Label'
import { Text } from './Text'
import { Wrapper } from './Wrapper'
import { Button } from './Button'
import { RadioBox } from './RadioBox'
import { Password } from './Password'
import { DatePicker } from './DatePicker'
import { ReactNode } from 'react'
import { DatePickerRange } from './DatePickerRange'
import { DropBox } from './DropBox'
import { MultiSelect } from './MultiSelect'

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

Input.Label = Label
Input.Text = Text
Input.Wrapper = Wrapper
Input.Button = Button
Input.RadioBox = RadioBox
Input.Password = Password
Input.DatePicker = DatePicker
Input.DatePickerRange = DatePickerRange
Input.DropBox = DropBox
Input.MultiSelect = MultiSelect
