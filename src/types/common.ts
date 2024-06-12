// 체크박스 상태를 위한 타입 정의
interface AgreeCheckboxState {
  all: boolean
  personalUsage: boolean
  sensitiveUsage: boolean
  personalProcessing: boolean
  serviceUsage: boolean
  marketing: boolean
}

interface CreatUserSchema {
  name: string
  username: string
  email: string
  birth_date: string
  gender: string
  email_agree: boolean
  phone_number: string
  contact_phone_number: string
  privacy_policy_agree: boolean
  privacy_terms_agree: boolean
  service_terms_agree: boolean
  marketing_agree: boolean
  password: string
  employee_number: string
}
