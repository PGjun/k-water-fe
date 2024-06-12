'use client'

import React, { useState, useRef, useEffect } from 'react'
import styles from './SelectBox.module.css'

const CustomSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleSelectChange = (value: any) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: any) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as any).contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.container} ref={dropdownRef}>
      <label htmlFor="customSelectBox" className={styles.label}>
        Choose an option:
      </label>
      <div className={styles.customSelectBox} onClick={handleToggleDropdown}>
        {selectedValue || 'Select an option'}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          <li
            onClick={() => handleSelectChange('option1')}
            className={styles.option}
          >
            Option 1
          </li>
          <li
            onClick={() => handleSelectChange('option2')}
            className={styles.option}
          >
            Option 2
          </li>
          <li
            onClick={() => handleSelectChange('option3')}
            className={styles.option}
          >
            Option 3
          </li>
          <li
            onClick={() => handleSelectChange('option3')}
            className={styles.option}
          >
            Option 3
          </li>
          <li
            onClick={() => handleSelectChange('option3')}
            className={styles.option}
          >
            Option 3
          </li>
          <li
            onClick={() => handleSelectChange('option3')}
            className={styles.option}
          >
            Option 3
          </li>
        </ul>
      )}
    </div>
  )
}

export default CustomSelectBox
