import { Icon } from '@/svgs/icons'
import { ChangeEvent, ReactNode } from 'react'

export const CheckBoxLabel = ({
  name,
  checked,
  onChange,
  labelContent,
}: {
  name: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  labelContent: ReactNode
}) => (
  <div className="self-stretch flex flex-row items-center justify-start">
    <input
      type="checkbox"
      name={name}
      id={name}
      hidden
      checked={checked}
      onChange={onChange}
    />
    <label
      htmlFor={name}
      className="relative w-[18px] h-[18px] shrink-0 cursor-pointer"
    >
      {checked ? <Icon.CheckBoxOn /> : <Icon.CheckBoxOff />}
    </label>
    <label htmlFor={name} className="cursor-pointer pl-[8px]">
      {labelContent}
    </label>
  </div>
)
