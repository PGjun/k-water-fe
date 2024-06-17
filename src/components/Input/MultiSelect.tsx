import _ from 'lodash'

type Option = { value: string; label: string }

interface MultiSelectProps {
  value: Option[]
  onChange: (newValue: Option[]) => void
  options: Option[]
}

export const MultiSelect = ({
  value: selectedOptions,
  onChange,
  options,
}: MultiSelectProps) => {
  const isAllSelected = selectedOptions.length === 0 // '전체' 선택은 값이 없을 때로 간주

  const handleClick = (option: Option) => {
    // '전체'를 클릭했을 때 선택된 모든 옵션을 비활성화
    if (option.value === '0') {
      onChange([])
      return
    }

    // 다른 옵션 클릭 시 선택 상태 토글
    const isSelected = _.some(selectedOptions, { value: option.value })

    const newValue = isSelected
      ? _.filter(selectedOptions, (o) => o.value !== option.value)
      : [...selectedOptions, option]

    onChange(newValue)
  }

  return (
    <div className="flex flex-wrap gap-[8px]">
      {/* 전체 옵션 렌더링 */}
      <div
        onClick={() => handleClick({ value: '0', label: '전체' })}
        className={`${isAllSelected ? 'border-[#3162FD] text-[#3162FD]' : 'border-[#c4c4c4] text-[#888888]'} flex h-[40px] select-none items-center justify-center rounded-[20px] border px-[20px] text-[14px] leading-[19.09px] md:h-[43px] md:px-[23.9px] md:text-[16px]`}
      >
        전체
      </div>
      {options.map((option, idx) => {
        return (
          <div
            key={idx}
            onClick={() => handleClick(option)}
            className={`${_.some(selectedOptions, { value: option.value }) ? 'border-[#3162FD] text-[#3162FD]' : 'border-[#c4c4c4] text-[#888888]'} flex h-[40px] select-none items-center justify-center rounded-[20px] border px-[20px] text-[14px] leading-[19.09px] md:h-[43px] md:px-[23.9px] md:text-[16px]`}
          >
            {option.label}
          </div>
        )
      })}
    </div>
  )
}

//! 전체 옵션을 options props로 받아올 때
//   const handleClick = (option: Option) => {

//     const isAllOption = option.value === '0'
//     const isAllSelected = _.some(selectedOptions, { value: '0' })

//     //* 전체 옵션 선택
//     const selectAll = () => {
//       if (isAllSelected) {
//         onChange(_.filter(selectedOptions, (o) => o.value !== '0'))
//       } else {
//         onChange([option])
//       }
//     }

//     //* 기본 옵션 선택
//     const selectOption = () => {
//       if (isAllSelected) {
//         onChange([option])
//       } else {
//         // 다른 옵션의 선택 상태 토글
//         if (_.some(selectedOptions, { value: currentOption })) {
//           onChange(_.filter(selectedOptions, (o) => o.value !== currentOption))
//         } else {
//           onChange([...selectedOptions, option])
//         }
//       }
//     }

//     //* 옵션 분기
//     if (isAllOption) {
//       // "전체" 옵션을 클릭했을 때
//       selectAll()
//     } else {
//       selectOption()
//     }
//   }
