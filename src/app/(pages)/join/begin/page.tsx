'use client'

import { CheckBoxLabel } from '@/components/join/CheckBoxLabel'
import { Icon } from '@/svgs/icons'
import { Controller } from 'react-hook-form'
import { useBeginLogic } from '@/hooks/logic/useBeginLogic'
import { Input } from '@/components/Input/InputFactory'

export default function BeginPage(props: {
  params: {}
  searchParams: AgreeCheckboxState
}) {
  const {
    handleSubmit,
    control,
    handleVerifyUsername,
    handleVerifyEmployee,
    handleBlur,
    onSubmit,
    getValues,
    push,
  } = useBeginLogic({ searchParams: props.searchParams })

  return (
    <div className="flex min-h-screen justify-center md:items-center md:bg-[#F6F6F6]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-center bg-white pb-[16px] md:my-[100px] md:w-[800px] md:items-center md:rounded-[20px] md:py-[56px] md:shadow"
      >
        <section className="flex w-full flex-col items-center justify-center gap-[24px] md:gap-[40px]">
          <section className="sticky top-0 z-50 flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] bg-white px-[16px] py-[20px] md:w-[640px] md:border-0 md:px-0 md:pb-0">
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
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <Input.Text
                      {...rest}
                      placeholder="이름 입력"
                      inputRef={ref}
                    />
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="생년월일" required />
                <Controller
                  name={'birth_date'}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <Input.DatePicker
                      {...rest}
                      placeholder="YYYY/MM/DD"
                      inputRef={ref}
                    />
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="성별" required />
                <Controller
                  name={'gender'}
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <Input.RadioBox
                      {...rest}
                      options={[{ value: '남성' }, { value: '여성' }]}
                    />
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="아이디" required />

                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, value, onChange } }) => (
                    <Input.Wrapper flex="row">
                      <Input.Text
                        value={value}
                        onChange={onChange}
                        placeholder="아이디 입력"
                        inputRef={ref}
                      />
                      <Input.Button
                        text="중복확인"
                        onClick={() => handleVerifyUsername(value)}
                      />
                    </Input.Wrapper>
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="비밀번호" required />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, value, onChange, name } }) => (
                    <Input.Password
                      value={value}
                      onChange={onChange}
                      placeholder="비밀번호 입력"
                      inputRef={ref}
                      onBlur={() => handleBlur(name)}
                    />
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="비밀번호 확인" required />
                <Controller
                  name="password_verify"
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => value === getValues('password'),
                  }}
                  render={({ field: { ref, value, onChange, name } }) => (
                    <div>
                      <Input.Password
                        value={value}
                        onChange={onChange}
                        placeholder="비밀번호 재입력"
                        inputRef={ref}
                        onBlur={() => handleBlur(name)}
                      />
                      <div className="ml-[5px] mt-[5px] text-[12px]">
                        {value && value === getValues('password') ? (
                          <p className="text-green-500">
                            비밀번호가 일치합니다.
                          </p>
                        ) : (
                          value !== getValues('password') && (
                            <p className="text-red-500">
                              비밀번호가 일치하지 않습니다.
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="이메일" required />
                <Input.Wrapper flex="col">
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { ref, ...rest } }) => (
                      <Input.Text
                        {...rest}
                        placeholder="이메일 입력"
                        inputRef={ref}
                      />
                    )}
                  />
                  <Controller
                    name="email_agree"
                    control={control}
                    render={({ field: { value, ref, ...rest } }) => (
                      <CheckBoxLabel
                        {...rest}
                        checked={value}
                        labelContent={
                          <div className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#666]">
                            소식 수신 동의 (미동의 시 중요사항 미발송)
                          </div>
                        }
                      />
                    )}
                  />
                </Input.Wrapper>
              </Input>

              {/* <Input flex="col">
                <Input.Label text="휴대폰 인증" required />
                <Input.Wrapper flex="col">
                  <Input.Wrapper flex="row">
                    <Controller
                      name="phone_number"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { ref, ...rest } }) => (
                        <Input.Text
                          {...rest}
                          placeholder="휴대폰 번호 입력"
                          inputRef={ref}
                        />
                      )}
                    />
                    <Input.Button text="본인인증" />
                  </Input.Wrapper>
                  <Input.Wrapper flex="row">
                    <Controller
                      name="phone_number_verify"
                      control={control}
                      rules={{ required: false }}
                      render={({ field: { ref, ...rest } }) => (
                        <Input.Text
                          {...rest}
                          placeholder="인증번호 입력"
                          inputRef={ref}
                        />
                      )}
                    />
                    <Input.Button text="확인" />
                  </Input.Wrapper>
                </Input.Wrapper>
              </Input> */}

              <Input flex="col">
                <Input.Label text="업체명" required />
                <Controller
                  name="company_name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <Input.Text
                      {...rest}
                      placeholder="업체명 입력"
                      inputRef={ref}
                    />
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="사원번호" required />
                <Controller
                  name="employee_number"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, value, onChange } }) => (
                    <Input.Wrapper flex="row">
                      <Input.Text
                        value={value}
                        onChange={onChange}
                        placeholder="사원번호 입력"
                        inputRef={ref}
                      />
                      <Input.Button
                        text="중복확인"
                        onClick={() => handleVerifyEmployee(value)}
                      />
                    </Input.Wrapper>
                  )}
                />
              </Input>

              <Input flex="col">
                <Input.Label text="담당 전화번호" required />
                <Controller
                  name="contact_phone_number"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <Input.Text
                      {...rest}
                      placeholder="담당 전화번호 입력"
                      inputRef={ref}
                    />
                  )}
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
    </div>
  )
}
