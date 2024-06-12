'use client'

import { Icon } from '@/svgs/icons'
import { useCheckAgreeFrom } from '@/hooks/useCheckAgreeForm'
import { usePushRouter } from '@/hooks/common/usePushRouter'
import { CheckBoxLabel } from '@/components/join/CheckBoxLabel'
import { Layout } from '@/components/common/layouts'

export default function AgreePage() {
  const { checkboxes, handleCheckboxChange, handleSubmit } = useCheckAgreeFrom()
  const { push } = usePushRouter()

  return (
    <Layout.Join>
      <form
        action={handleSubmit}
        className="flex w-full justify-center bg-white py-[16px] pt-[20px] md:my-[100px] md:w-[800px] md:items-center md:rounded-[20px] md:py-[56px] md:shadow"
      >
        <section className="flex w-full flex-col items-center justify-center gap-[24px] md:gap-[40px]">
          <section className="flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] px-[16px] pb-[20px] md:w-[640px] md:border-0 md:px-0 md:pb-0">
            <button onClick={() => push('LOGIN')} type="button">
              <Icon.Back />
            </button>
            <div className="flex flex-row items-end justify-start gap-[8px]">
              <div className="whitespace-nowrap text-[18px] font-bold leading-[100%] text-[#333] md:text-[26px]">
                회원가입
              </div>
              <div className="whitespace-nowrap text-[12px] leading-[100%] text-[#666] md:text-[16px]">
                약관동의 및 실명 인증
              </div>
            </div>
          </section>

          <section className="flex w-full flex-1 flex-col justify-between px-[16px] md:w-[640px] md:px-0">
            <div className="flex flex-col items-start justify-start gap-[20px] self-stretch">
              <div className="relative flex h-[20px] shrink-0 self-stretch">
                <div className="absolute left-0 top-0 h-[20px] text-[16px] leading-[90%] text-[#333] md:text-[20px] md:font-semibold">
                  서비스 이용약관 동의
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start self-stretch">
                  <div className="border-#e9ecef flex flex-col items-start justify-center border-b px-0 pb-[20px] pt-0">
                    <CheckBoxLabel
                      name="all"
                      checked={checkboxes.all}
                      onChange={handleCheckboxChange}
                      labelContent={
                        <div>
                          <span className="whitespace-nowrap text-[16px] font-bold leading-[100%] text-[#333] md:text-[18px]">
                            전체 동의하기
                          </span>
                        </div>
                      }
                    />
                    <label
                      htmlFor="all"
                      className="flex flex-row items-start justify-start self-stretch pb-0 pl-[26px] pr-0 pt-[12px]"
                    >
                      <div className="cursor-pointer text-[12px] leading-[150%] tracking-[.01em] text-[#888] md:text-[14px]">
                        전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어
                        있습니다. 개별적 동의 선택도 가능하며, 선택 항목에 대한
                        동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
                      </div>
                    </label>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[20px] self-stretch pb-[20px] pl-[28px] pr-[20px] pt-[20px]">
                    <section className="flex flex-row items-center justify-between self-stretch">
                      <CheckBoxLabel
                        name="personalUsage"
                        checked={checkboxes.personalUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="whitespace-nowrap text-[14px] font-medium leading-[140%] md:text-[16px]">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              개인정보 수집 이용동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-between self-stretch">
                      <CheckBoxLabel
                        name="sensitiveUsage"
                        checked={checkboxes.sensitiveUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="whitespace-nowrap text-[14px] font-medium leading-[140%] md:text-[16px]">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              민감정보 수집 이용동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-between self-stretch">
                      <CheckBoxLabel
                        name="personalProcessing"
                        checked={checkboxes.personalProcessing}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="whitespace-nowrap text-[14px] font-medium leading-[140%] md:text-[16px]">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              개인정보 처리방침
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-between self-stretch">
                      <CheckBoxLabel
                        name="serviceUsage"
                        checked={checkboxes.serviceUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="whitespace-nowrap text-[14px] font-medium leading-[140%] md:text-[16px]">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">서비스 이용약관</span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-between self-stretch">
                      <CheckBoxLabel
                        name="marketing"
                        checked={checkboxes.marketing}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="whitespace-nowrap text-[14px] font-medium leading-[140%] md:text-[16px]">
                            <span className="text-[#888]">(선택)</span>
                            <span className="text-[#333]">
                              개인정보 마케팅 활용 동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-start gap-[8px] px-[26px] py-0">
                      <div className="relative h-[19px] w-[19px] shrink-0">
                        {checkboxes.marketing && <Icon.BackBgNone />}
                      </div>
                      <div className="whitespace-nowrap text-[12px] font-medium leading-[140%] text-[#333] md:text-[14px]">
                        이벤트, 혜택 정보 수신
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex h-[61px] shrink-0 flex-row items-center justify-center self-stretch rounded-[4px] bg-[#3162fd] px-[36px] py-[20px]"
            >
              <div className="whitespace-nowrap text-center text-[18px] font-bold text-[#fff]">
                다음 단계로
              </div>
            </button>
          </section>
        </section>
      </form>
    </Layout.Join>
  )
}
