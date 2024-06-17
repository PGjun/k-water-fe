import React from 'react'
import { RefCallBack } from 'react-hook-form'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla', label: 'Vanilla' },
]

interface DropBoxProps {
  value: { value: string; label: string }
  onChange: () => void
  inputRef?: RefCallBack
}

export const DropBox = (props: DropBoxProps) => (
  <div className="w-full">
    <Select
      options={options}
      isSearchable={false}
      {...props}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: '44px',
          borderColor: state.isFocused ? 'black' : '#c4c4c4',
          boxShadow: state.isFocused ? '0 0 0 1px black' : '',
          '&:hover': {
            borderColor: 'none',
          },
          fontSize: '14px',
        }),
        option: (provided, state) => ({
          ...provided,
          fontSize: '14px',
          color: state.isSelected ? 'black' : '',
          backgroundColor: state.isSelected ? '#F3F5FF' : 'white',
          paddingLeft: 16,
        }),
        valueContainer: (base, props) => ({
          ...base,
          paddingLeft: 16,
        }),
        menuList: (base, props) => ({
          ...base,
          maxHeight: 200,
        }),
      }}
    />
  </div>
)
