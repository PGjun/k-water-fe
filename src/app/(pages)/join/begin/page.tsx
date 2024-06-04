import { Layout } from '@/app/_components/common/layouts'

export default function BeginPage() {
  return (
    <Layout.Join>
      <div className="my-[100px]">
        <div className="w-[800px] shadow flex flex-col items-start justify-start py-[56px] px-[80px] bg-[#fff] rounded-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
              <div className="relative w-[24px] h-[24px] shrink-0">
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#ff939300]"></div>
                <img
                  className="absolute left-[4px] top-[5px]"
                  width="16"
                  height="15"
                  src="Group 311I3_1092;1_867.png"
                ></img>
              </div>
              <div className="flex flex-row items-end justify-start gap-[8px]">
                <div className="text-[26px] leading-[100%] font-bold text-[#333] whitespace-nowrap">
                  회원가입
                </div>
                <div className="text-[16px] leading-[100%] text-[#666] whitespace-nowrap">
                  기본 정보 입력(1/2)
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[28px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">이름</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      이름 입력
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">생년월일</span>
                  </div>
                  <div className="relative self-stretch h-[44px] shrink-0 flex flex-row items-center justify-start gap-[37px] p-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[94%] text-[#c4c4c4] whitespace-nowrap">
                      YYYY/MM/DD
                    </div>
                    <div className="absolute right-[16px] top-[16px] w-[13px] h-[13px] shrink-0 overflow-hidden">
                      <img
                        className="absolute left-0 top-[0px]"
                        width="13"
                        height="12"
                        src="Layer 1I3_1339;1_450;1069_16286.png"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">성별</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex-1 h-[41px] flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#4a4a4a] rounded-[4px]">
                      <div className="text-[14px] font-medium text-[#fff] whitespace-nowrap">
                        남성
                      </div>
                    </div>
                    <div className="flex-1 h-[41px] flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px]">
                      <div className="text-[14px] font-medium text-[#4a4a4a] whitespace-nowrap">
                        여성
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="text-[16px] leading-[140%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">아이디</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex-1 flex flex-row items-center justify-start py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px]">
                      <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                        아이디 입력
                      </div>
                    </div>
                    <div className="w-[112px] h-[44px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#fff] border-[1px] border-solid border-[#888] rounded-[4px]">
                      <div className="text-[14px] font-bold text-[#4a4a4a] whitespace-nowrap">
                        중복확인
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">비밀번호</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      비밀번호 입력
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">비밀번호 확인</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      비밀번호 재입력
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">이메일</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      이메일 입력
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative w-[18px] h-[18px] shrink-0">
                      <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#4a4a4a] rounded-[2px]"></div>
                      <img
                        className="absolute left-[3px] top-[3px]"
                        width="12"
                        height="12"
                        src="Group 159I3_1364;1_701.png"
                      ></img>
                    </div>
                    <div className="text-[12px] leading-[120%] font-medium text-[#666] whitespace-nowrap">
                      소식 수신 동의 (미동의 시 중요사항 미발송)
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="text-[16px] leading-[140%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">휴대폰 인증</span>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                      <div className="relative flex-1 flex flex-row items-center justify-start gap-[10px] py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px]">
                        <div className="text-[14px] leading-[140%] text-[#333] whitespace-nowrap">
                          +82
                        </div>
                        <div className="absolute -translate-y-1/2 left-[68px] top-1/2 flex flex-row items-center justify-start pt-[4px] pr-[13px] pb-[4px] pl-0 border-#dee2e6 border border-[0_1px_0_0] overflow-hidden">
                          <div className="relative w-[11px] h-[11px] shrink-0">
                            <img
                              className="absolute left-[1px] top-[3px]"
                              width="4"
                              height="8"
                              src="Group 159I3_1424;6_1561.png"
                            ></img>
                          </div>
                        </div>
                      </div>
                      <div className="w-[112px] h-[44px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#fff] border-[1px] border-solid border-[#888] rounded-[4px]">
                        <div className="text-[14px] font-bold text-[#4a4a4a] whitespace-nowrap">
                          본인인증
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
                      <div className="flex-1 flex flex-row items-center justify-between py-[12px] px-[16px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px]">
                        <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                          인증번호
                        </div>
                        <div className="text-[14px] leading-[140%] text-[#666] whitespace-nowrap">
                          3:00
                        </div>
                      </div>
                      <div className="w-[112px] h-[44px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#fff] border-[1px] border-solid border-[#888] rounded-[4px]">
                        <div className="text-[14px] font-bold text-[#4a4a4a] whitespace-nowrap">
                          확인
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">업체명</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[18px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      업체명 입력
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="text-[16px] leading-[140%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">사원번호</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex-1 flex flex-row items-center justify-start py-[12px] px-[18px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px]">
                      <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                        사원번호 입력
                      </div>
                    </div>
                    <div className="w-[112px] h-[44px] shrink-0 flex flex-row items-center justify-center py-[12px] px-[28px] bg-[#fff] border-[1px] border-solid border-[#888] rounded-[4px]">
                      <div className="text-[14px] font-bold text-[#4a4a4a] whitespace-nowrap">
                        중복확인
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="text-[16px] leading-[90%] font-semibold whitespace-nowrap">
                    <span className="text-[#ff3819]">* </span>
                    <span className="text-[#333]">담당 전화번호</span>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start py-[12px] px-[18px] bg-[#fff] border-[1px] border-solid border-[#c4c4c4] rounded-[4px] overflow-hidden">
                    <div className="text-[14px] leading-[140%] text-[#c4c4c4] whitespace-nowrap">
                      담당 전화번호 입력
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="flex-1 h-[61px] flex flex-row items-center justify-center py-[20px] px-[36px] bg-[#3162fd] rounded-[4px]">
                  <div className="text-[18px] font-bold text-[#fff] text-center whitespace-nowrap">
                    완료
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout.Join>
  )
}
