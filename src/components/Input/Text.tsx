import { InputProps } from '@/types/input'

export const Text = ({
  value,
  onChange,
  placeholder,
  inputRef,
}: InputProps) => {
  return (
    <input
      type="text"
      ref={inputRef}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder}
      className="h-[44px] w-full rounded-[4px] border border-[#c4c4c4] bg-[#fff] px-[16px] text-[12px] placeholder:text-[#c4c4c4] md:h-[44px] md:text-[14px]"
    />
  )
}
