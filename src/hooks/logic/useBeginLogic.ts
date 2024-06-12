import { api } from '@/services/api'
import moment from 'moment'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePushRouter } from '../common/usePushRouter'

export const useBeginLogic = ({
  searchParams,
}: {
  searchParams: AgreeCheckboxState
}) => {
  const { push } = usePushRouter()
  const { handleSubmit, control, trigger, getValues } = useForm<BeginFormData>({
    defaultValues: { gender: '남성', email_agree: false },
  })

  const [verifiedUsername, setVerifiedUsername] = useState('')
  const [verifiedEmployee, setVerifiedEmployee] = useState('')

  const handleVerifyUsername = async (username: string) => {
    if (!username) return alert('아이디를 입력하세요.')

    const res = await api.verifyUsername(username)
    if (res.status === 200) {
      console.log(res.data)
      const resData = res.data
      if (resData) {
        alert('중복된 아이디입니다.')
      } else if (!resData) {
        setVerifiedUsername(username)
        alert('사용 가능한 아이디입니다.')
      }
    }
  }

  const handleVerifyEmployee = async (employee_number: string) => {
    if (!employee_number) return alert('사원번호를 입력하세요.')

    const res = await api.verifyEmployee(employee_number)
    if (res.status === 200) {
      console.log(res.data)
      const resData = res.data
      if (resData) {
        alert('중복된 사원번호입니다.')
      } else if (!resData) {
        setVerifiedEmployee(employee_number)
        alert('사용 가능한 사원번호입니다.')
      }
    }
  }

  const handleBlur = async (field: string) => {
    const values = getValues()
    if (field === 'password') {
      if (values.password_verify) {
        await trigger('password_verify')
      }
    } else if (field === 'password_verify') {
      await trigger('password_verify')
    }
  }

  const onSubmit = async (data: BeginFormData) => {
    //현재 작성된 유저아이디와 중복확인이 완료된 유저아이디가 다르다면
    if (data.username !== verifiedUsername)
      return alert('아이디 중복확인이 필요합니다.')
    if (data.employee_number !== verifiedEmployee)
      return alert('사원번호 중복확인이 필요합니다.')

    const { birth_date, gender, password_verify, ...rest } = data
    const { marketing } = searchParams

    const newBirthDate = moment(birth_date).format('YYYY-MM-DD')
    const newGender = gender === '남성' ? 'M' : 'F'

    const newData = {
      ...rest,
      birth_date: newBirthDate,
      gender: newGender,
      privacy_policy_agree: true,
      privacy_terms_agree: true,
      service_terms_agree: true,
      marketing_agree: marketing ?? false,
    }

    console.log(newData)
    const res = await api.createUser(newData)
    if (res.status === 200) {
      alert('회원가입 완료')
      push('LOGIN')
    }
  }
  return {
    handleSubmit,
    control,
    handleVerifyUsername,
    handleVerifyEmployee,
    handleBlur,
    onSubmit,
    getValues,
    push,
  }
}
