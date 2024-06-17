//* API호출 시 동일한 스키마 정의

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
