export const Label = ({
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
