'use client'

import { Icon } from '@/svgs/icons'
import { useCheckAgreeFrom } from '@/app/_hooks/useCheckAgreeForm'
import { usePushRouter } from '@/app/_hooks/common/usePushRouter'
import { CheckBoxLabel } from '@/app/_components/join/agree/CheckBoxLabel'
import { Layout } from '@/app/_components/common/layouts'

export default function AgreePage() {
  const { checkboxes, handleCheckboxChange, handleSubmit } = useCheckAgreeFrom()
  const { push } = usePushRouter()

  return (
    <Layout.Join>
      <form
        action={handleSubmit}
        className="my-[100px] w-[800px] py-[56px] rounded-[20px] shadow bg-white flex justify-center items-center"
      >
        <div className="left-[640px] top-[269px] w-[640px] flex flex-col items-start justify-start gap-[40px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
            <button
              onClick={() => push('LOGIN')}
              type="button"
              className="relative w-[24px] h-[24px] shrink-0"
            >
              <Icon.Back />
            </button>
            <div className="flex flex-row items-end justify-start gap-[8px]">
              <div className="text-[26px] leading-[100%] font-bold text-[#333] whitespace-nowrap">
                회원가입
              </div>
              <div className="text-[16px] leading-[100%] text-[#666] whitespace-nowrap">
                약관동의 및 실명 인증
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="relative self-stretch h-[20px] shrink-0 flex">
                <div className="absolute left-0 top-0 w-[640px] h-[20px] text-[20px] leading-[90%] font-semibold text-[#333]">
                  서비스 이용약관 동의
                </div>
              </div>
              <div className="w-[640px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="w-[640px] flex flex-col items-start justify-center gap-[12px] pt-0 px-0 pb-[20px] border-#e9ecef border-b">
                    <CheckBoxLabel
                      name="all"
                      checked={checkboxes.all}
                      onChange={handleCheckboxChange}
                      labelContent={
                        <span className="text-[18px] leading-[100%] font-bold text-[#333] whitespace-nowrap">
                          전체 동의하기
                        </span>
                      }
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pr-0 pb-0 pl-[26px]">
                      <div className="text-[14px] leading-[150%] tracking-[.01em] text-[#888] whitespace-nowrap">
                        전체 동의는 필수 및 선택 정보에 대한 동의도 포함되어
                        있습니다.
                        <br />
                        개별적 동의 선택도 가능하며, 선택 항목에 대한 동의를
                        거부하시는 경우에도 서비스 이용이 가능합니다.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] pt-[20px] pr-[20px] pb-[20px] pl-[28px]">
                    <section className="self-stretch flex flex-row items-center justify-between">
                      <CheckBoxLabel
                        name="personalUsage"
                        checked={checkboxes.personalUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="text-[16px] leading-[140%] font-medium whitespace-nowrap">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              개인정보 수집 이용동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="self-stretch flex flex-row items-center justify-between">
                      <CheckBoxLabel
                        name="sensitiveUsage"
                        checked={checkboxes.sensitiveUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="text-[16px] leading-[140%] font-medium whitespace-nowrap">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              민감정보 수집 이용동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="self-stretch flex flex-row items-center justify-between">
                      <CheckBoxLabel
                        name="personalProcessing"
                        checked={checkboxes.personalProcessing}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="text-[16px] leading-[140%] font-medium whitespace-nowrap">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">
                              개인정보 처리방침
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="self-stretch flex flex-row items-center justify-between">
                      <CheckBoxLabel
                        name="serviceUsage"
                        checked={checkboxes.serviceUsage}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="text-[16px] leading-[140%] font-medium whitespace-nowrap">
                            <span className="text-[#3162fd]">(필수)</span>
                            <span className="text-[#333]">서비스 이용약관</span>
                          </div>
                        }
                      />
                    </section>

                    <section className="self-stretch flex flex-row items-center justify-between">
                      <CheckBoxLabel
                        name="marketing"
                        checked={checkboxes.marketing}
                        onChange={handleCheckboxChange}
                        labelContent={
                          <div className="text-[16px] leading-[140%] font-medium whitespace-nowrap">
                            <span className="text-[#888]">(선택)</span>
                            <span className="text-[#333]">
                              개인정보 마케팅 활용 동의
                            </span>
                          </div>
                        }
                      />
                    </section>

                    <section className="flex flex-row items-center justify-start gap-[8px] py-0 px-[26px]">
                      <div className="relative w-[19px] h-[19px] shrink-0">
                        <div className="absolute left-0 right-0 top-0 bottom-0 rounded-[2px]"></div>
                      </div>
                      <div className="text-[14px] leading-[140%] font-medium text-[#333] whitespace-nowrap">
                        이벤트, 혜택 정보 수신
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="self-stretch h-[61px] shrink-0 flex flex-row items-center justify-center py-[20px] px-[36px] bg-[#3162fd] rounded-[4px]"
          >
            <div className="text-[18px] font-bold text-[#fff] text-center whitespace-nowrap">
              다음 단계로
            </div>
          </button>
        </div>
      </form>
    </Layout.Join>
  )
}
