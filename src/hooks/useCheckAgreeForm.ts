import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { usePushRouter } from './common/usePushRouter'
import _ from 'lodash'

export const useCheckAgreeFrom = () => {
  const [checkboxes, setCheckboxes] = useState({
    all: false,
    personalUsage: false,
    sensitiveUsage: false,
    personalProcessing: false,
    serviceUsage: false,
    marketing: false,
  })

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    // '전체 동의하기' 체크박스 로직
    if (name === 'all') {
      const newCheckboxes = Object.keys(checkboxes).reduce(
        (acc: AgreeCheckboxState, key) => {
          acc[key as keyof AgreeCheckboxState] = checked
          return acc
        },
        {} as AgreeCheckboxState,
      )
      setCheckboxes(newCheckboxes)
    } else {
      // 하위 체크박스 로직
      const newCheckboxes = { ...checkboxes, [name]: checked }
      // 모든 하위 체크박스가 선택되었는지 확인
      const allChecked = Object.values(newCheckboxes).slice(1).every(Boolean)
      newCheckboxes.all = allChecked
      setCheckboxes(newCheckboxes)
    }
  }

  const { push } = usePushRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // 모든 필수 항목이 체크되었는지 확인
    const requiredFields: (keyof AgreeCheckboxState)[] = [
      'personalUsage',
      'sensitiveUsage',
      'personalProcessing',
      'serviceUsage',
    ]
    const allRequiredChecked = requiredFields.every(
      (field) => checkboxes[field],
    )

    if (!allRequiredChecked) {
      alert('모든 필수 항목에 동의해 주세요.')
      return
    }

    // 쿼리 스트링으로 전달할 체크박스 값들 필터링
    const queryParams = _.pickBy(
      checkboxes,
      (value, key) => value === true && key !== 'all',
    )

    push('JOIN_BEGIN', queryParams)
  }

  return { checkboxes, handleCheckboxChange, handleSubmit }
}
