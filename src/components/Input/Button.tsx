import { MouseEventHandler } from 'react'

export const Button = ({
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
