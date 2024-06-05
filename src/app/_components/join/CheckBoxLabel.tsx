import { Icon } from '@/svgs/icons'
import { ChangeEvent, ReactNode } from 'react'

export const CheckBoxLabel = ({
  name,
  checked = false, // 초기값을 설정해줘야 제어 컴포넌트가 돼서 에러가 안뜸
  onChange,
  labelContent,
}: {
  name: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  labelContent: ReactNode
}) => (
  <div className="flex flex-row items-center justify-start self-stretch">
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
      className="relative h-[18px] w-[18px] shrink-0 cursor-pointer"
    >
      {checked ? <Icon.CheckBoxOn /> : <Icon.CheckBoxOff />}
    </label>
    <label htmlFor={name} className="cursor-pointer pl-[8px]">
      {labelContent}
    </label>
  </div>
)
