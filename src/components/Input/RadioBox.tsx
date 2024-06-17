import { RadioBoxProps } from '@/types/input'
import { FieldValues } from 'react-hook-form'

export const RadioBox = <T extends FieldValues>({
  name,
  options,
  value,
  onChange,
}: RadioBoxProps<T>) => {
  return (
    <div className="flex gap-[12px]">
      {options.map((option, idx) => {
        const baseStyle =
          'flex h-[41px] flex-1 flex-row items-center justify-center rounded-[4px] text-[14px]  px-[28px] py-[12px] border bg-[#fff]'

        const styles = {
          on: 'text-[#3162FD] border-[#3162FD]',
          of: 'text-[#4a4a4a] border-[#c4c4c4]',
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
