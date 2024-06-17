import { Icon } from '@/svgs/icons'
import { InputProps } from '@/types/input'
import { useState } from 'react'

export const Password = ({
  value,
  onChange,
  placeholder,
  onBlur,
  inputRef,
}: InputProps) => {
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
