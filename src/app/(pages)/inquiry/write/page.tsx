import { RadioBox } from '@/components/Input/RadioBox'
import { Icon } from '@/svgs/icons'

export default function InquiryWritePage() {
  return (
    <div className="flex justify-center md:mt-[76px]">
      <div className="min-h-screen w-full flex-1 md:mx-[16px] md:max-w-[1200px]">
        <section className="mx-[16px] flex items-center gap-[12px] md:mx-0 md:items-end md:justify-between">
          <div className="md:hidden">
            <Icon.NavBack />
          </div>
          <h1 className="py-[20px] text-[20px] font-bold leading-[20px] md:text-[26px]">
            1:1 문의하기
          </h1>
        </section>

        <section className="border-t border-[#C4C4C4] px-[16px] py-[20px] md:border-none md:px-0 md:pb-[80px] md:pt-[40px]">
          <section>
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor=""
                className="text-[16px] leading-[14.4px] md:text-[20px] md:leading-[20px]"
              >
                제목
              </label>
              <input
                type="text"
                placeholder="제목을 입력 해주세요."
                className="rounded border border-[#C4C4C4] px-[16px] py-[15.5px] text-[14px] leading-[13.16px] placeholder:text-[#C4C4C4] md:leading-[14px]"
              />
            </div>
          </section>

          <section className="mt-[40px]">
            <div className="flex flex-col gap-[12px]">
              <label
                htmlFor=""
                className="text-[16px] leading-[14.4px] md:text-[20px] md:leading-[20px]"
              >
                문의 유형
              </label>

              <RadioBox
                name=""
                options={[
                  { value: '시스템' },
                  { value: '오류' },
                  { value: '기타' },
                ]}
                value=""
              />
            </div>

            <textarea
              name=""
              id=""
              rows={15}
              placeholder="문의 내용을 작성 해주세요."
              className="mt-[20px] w-full resize-none rounded border border-[#C4C4C4] p-[20px] text-[14px] leading-[14px]"
            />
          </section>

          <section className="mt-[40px]">
            <section className="hidden md:block">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] leading-[20px] md:text-[20px]"
                >
                  파일 업로드
                </label>
                <button className="h-[32px] rounded border border-[#888888] px-[28px] text-[14px] leading-[16.71px]">
                  내 PC
                </button>
              </div>

              <article className="mt-[20px] flex h-[142px] items-center justify-center rounded border border-dashed border-[#C4C4C4]">
                <div className="flex items-center gap-[4px]">
                  <Icon.Arrow />
                  <span className="text-[14px] leading-[16.71px] text-[#888888]">
                    파일을 마우스로 끌어오세요
                  </span>
                </div>
              </article>
            </section>

            <button className="h-[60px] w-full rounded border border-[#888888] text-[20px] font-bold leading-[23.87px] md:hidden">
              파일 첨부
            </button>

            <section className="mt-[12px] w-full space-y-[8px] rounded border border-[#C4C4C4] p-[20px] md:border-[#888888]">
              <article className="flex justify-between">
                <span className="text-[14px] leading-[14px]">
                  file_uplowad_ex.png
                </span>
                <div className="flex items-center gap-[40px]">
                  <span className="text-[14px] leading-[14px]">0.25MB</span>
                  <Icon.Xmark />
                </div>
              </article>
              <article className="flex justify-between">
                <span className="text-[14px] leading-[14px]">
                  file_uplowad_ex.png
                </span>
                <div className="flex items-center gap-[40px]">
                  <span className="text-[14px] leading-[14px]">0.25MB</span>
                  <Icon.Xmark />
                </div>
              </article>
              <article className="flex justify-between">
                <span className="text-[14px] leading-[14px]">
                  file_uplowad_ex.png
                </span>
                <div className="flex items-center gap-[40px]">
                  <span className="text-[14px] leading-[14px]">0.25MB</span>
                  <Icon.Xmark />
                </div>
              </article>
              <article className="flex justify-between">
                <span className="text-[14px] leading-[14px]">
                  file_uplowad_ex.png
                </span>
                <div className="flex items-center gap-[40px]">
                  <span className="text-[14px] leading-[14px]">0.25MB</span>
                  <Icon.Xmark />
                </div>
              </article>
            </section>

            <section className="mt-[40px] flex justify-center gap-[8px]">
              <button className="h-[44px] flex-grow rounded border border-[#4A4A4A] font-bold leading-[16.71px] text-[#4A4A4A] text-[14] md:flex-none md:px-[60px]">
                취소
              </button>
              <button className="h-[44px] flex-grow rounded bg-[#3162FD] font-bold leading-[16.71px] text-[14] text-white md:flex-none md:px-[60px]">
                작성
              </button>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
