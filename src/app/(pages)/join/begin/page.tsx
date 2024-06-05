'use client'

import { Layout } from '@/app/_components/common/layouts'
import { CheckBoxLabel } from '@/app/_components/join/CheckBoxLabel'
import { usePushRouter } from '@/app/_hooks/common/usePushRouter'
import { Icon } from '@/svgs/icons'
import { ChangeEventHandler, ReactNode } from 'react'
import {
  Controller,
  FieldValues,
  Path,
  UseFormRegister,
  useForm,
} from 'react-hook-form'

interface BeginFormData {
  name: string
  username: string
  gender: '남성' | '여성'
  email: string
  birth_date: string
  email_agree: true
  phone_number: string
  phone_number_verify: string
  contact_phone_number: string
  password: string
  password_verify: string
  company_name: string
  employee_number: string
}

const Input = ({
  flex,
  children,
}: {
  flex: 'row' | 'col'
  children: ReactNode
}) => {
  const flexTypes = {
    row: 'flex gap-[12px] self-stretch',
    col: 'flex flex-col gap-[12px] self-stretch',
  }

  return <div className={flexTypes[flex]}>{children}</div>
}

const Label = ({
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

const Text = <T extends FieldValues>({
  name,
  register,
  placeholder,
  required = false,
}: {
  name: Path<T>
  register: UseFormRegister<T>
  placeholder: string
  required?: boolean
}) => {
  return (
    <input
      type="text"
      className="h-[41px] w-full rounded-[4px] border border-[#c4c4c4] bg-[#fff] px-[16px] text-[12px] placeholder:text-[#c4c4c4] md:h-[44px] md:text-[14px]"
      {...register(name, { required })}
      placeholder={placeholder}
    />
  )
}

const Wrapper = ({
  flex,
  children,
}: {
  flex: 'row' | 'col'
  children: ReactNode
}) => {
  const flexTypes = {
    row: 'flex gap-[8px]',
    col: 'flex flex-col gap-[8px]',
  }
  return <div className={flexTypes[flex]}>{children}</div>
}

const Button = ({ text }: { text: string }) => {
  return (
    <button
      type="button"
      className="flex h-[41px] w-[112px] shrink-0 flex-row items-center justify-center rounded-[4px] border-[1px] border-[#888] bg-[#fff] px-[28px] py-[12px] md:h-[44px]"
    >
      <div className="whitespace-nowrap text-[12px] font-bold text-[#4a4a4a] md:text-[14px]">
        {text}
      </div>
    </button>
  )
}

const RadioBox = <T extends FieldValues>({
  name,
  options,
  value,
  onChange,
}: {
  name: Path<T>
  options: { value: string }[]
  value: string
  onChange: ChangeEventHandler
}) => {
  return (
    <div className="flex gap-[12px]">
      {options.map((option, idx) => {
        const baseStyle =
          'flex h-[41px] flex-1 flex-row items-center justify-center rounded-[4px] text-[14px]  px-[28px] py-[12px]'

        const styles = {
          on: 'text-[#fff] bg-[#4a4a4a]',
          of: 'border text-[#4a4a4a] border-[#c4c4c4] bg-[#fff]',
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

Input.Label = Label
Input.Text = Text
Input.Wrapper = Wrapper
Input.Button = Button
Input.RadioBox = RadioBox

export default function BeginPage() {
  const { push } = usePushRouter()
  const { register, handleSubmit, control } = useForm<BeginFormData>({
    defaultValues: { gender: '남성' },
  })

  const onSubmit = (data: BeginFormData) => {
    console.log(data)
  }
  return (
    <Layout.Join>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-center bg-white py-[16px] pt-[20px] md:my-[100px] md:w-[800px] md:items-center md:rounded-[20px] md:py-[56px] md:shadow"
      >
        <section className="flex w-full flex-col items-center justify-center gap-[24px] md:gap-[40px]">
          <section className="flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] px-[16px] pb-[20px] md:w-[640px] md:border-0 md:px-0 md:pb-0">
            <button onClick={() => push('JOIN_AGREE')} type="button">
              <Icon.Back />
            </button>
            <div className="flex flex-row items-end justify-start gap-[8px]">
              <div className="whitespace-nowrap text-[18px] font-bold leading-[100%] text-[#333] md:text-[26px]">
                회원가입
              </div>
              <div className="whitespace-nowrap text-[12px] leading-[100%] text-[#666] md:text-[16px]">
                기본 정보 입력(1/2)
              </div>
            </div>
          </section>

          <section className="flex w-full flex-1 flex-col justify-between gap-[40px] px-[16px] md:w-[640px] md:gap-[60px] md:px-0">
            <section className="flex flex-col items-start justify-start gap-[28px] self-stretch">
              <Input flex="col">
                <Input.Label text="이름" required />
                <Input.Text
                  name="name"
                  placeholder="이름 입력"
                  register={register}
                  required
                />
              </Input>

              <Input flex="col">
                <Input.Label text="생년월일" required />
                <Input.Text
                  name="birth_date"
                  placeholder="YYYY/MM/DD"
                  register={register}
                  required
                />
              </Input>

              <Input flex="col">
                <Input.Label text="성별" required />
                <Controller
                  name={'gender'}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { name, value, onChange } }) => {
                    return (
                      <Input.RadioBox
                        name={name}
                        options={[{ value: '남성' }, { value: '여성' }]}
                        value={value}
                        onChange={onChange}
                      />
                    )
                  }}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="아이디" required />
                <Input.Wrapper flex="row">
                  <Input.Text
                    name="username"
                    placeholder="아이디 입력"
                    register={register}
                  />
                  <Input.Button text="중복확인" />
                </Input.Wrapper>
              </Input>

              <Input flex="col">
                <Input.Label text="비밀번호" required />
                <Input.Text
                  name="password"
                  placeholder="비밀번호 입력"
                  register={register}
                  required
                />
              </Input>

              <Input flex="col">
                <Input.Label text="비밀번호 확인" required />
                <Input.Text
                  name="password_verify"
                  placeholder="비밀번호 재입력"
                  register={register}
                  required
                />
              </Input>

              <Input flex="col">
                <Input.Label text="이메일" required />
                <Input.Wrapper flex="col">
                  <Input.Text
                    name="email"
                    placeholder="이메일 입력"
                    register={register}
                    required
                  />
                  <Controller
                    name="email_agree"
                    control={control}
                    render={({ field: { name, value, onChange } }) => {
                      return (
                        <CheckBoxLabel
                          name={name}
                          onChange={onChange}
                          checked={value}
                          labelContent={
                            <div className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#666]">
                              소식 수신 동의 (미동의 시 중요사항 미발송)
                            </div>
                          }
                        />
                      )
                    }}
                  />
                </Input.Wrapper>
              </Input>

              <Input flex="col">
                <Input.Label text="휴대폰 인증" required />
                <Input.Wrapper flex="col">
                  <Input.Wrapper flex="row">
                    <Input.Text
                      name="phone_number"
                      placeholder="휴대폰 번호 입력"
                      register={register}
                    />
                    <Input.Button text="본인인증" />
                  </Input.Wrapper>
                  <Input.Wrapper flex="row">
                    <Input.Text
                      name="phone_number_verify"
                      placeholder="인증번호 입력"
                      register={register}
                    />
                    <Input.Button text="확인" />
                  </Input.Wrapper>
                </Input.Wrapper>
              </Input>

              <Input flex="col">
                <Input.Label text="업체명" required />
                <Input.Text
                  name="company_name"
                  placeholder="업체명 입력"
                  register={register}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="사원번호" required />
                <Input.Wrapper flex="row">
                  <Input.Text
                    name="employee_number"
                    placeholder="사원번호 입력"
                    register={register}
                  />
                  <Input.Button text="중복확인" />
                </Input.Wrapper>
              </Input>

              <Input flex="col">
                <Input.Label text="담당 전화번호" required />
                <Input.Text
                  name="contact_phone_number"
                  placeholder="담당 전화번호 입력"
                  register={register}
                />
              </Input>
            </section>
            <div className="flex flex-row items-start justify-end self-stretch">
              <button
                type="submit"
                className="flex h-[61px] flex-1 flex-row items-center justify-center rounded-[4px] bg-[#3162fd] px-[36px] py-[20px]"
              >
                <div className="whitespace-nowrap text-center text-[18px] font-bold text-[#fff]">
                  완료
                </div>
              </button>
            </div>
          </section>
        </section>
      </form>
    </Layout.Join>
  )
}
