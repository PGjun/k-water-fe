import { Icon } from '@/svgs/icons'

export default function InquiryPage() {
  return (
    <div className="flex justify-center md:mt-[76px]">
      <div className="min-h-screen w-full flex-1 md:mx-[16px] md:max-w-[1200px]">
        <section>
          <section className="mx-[16px] flex items-center gap-[12px] md:mx-0 md:items-end md:justify-between">
            <div className="md:hidden">
              <Icon.NavBack />
            </div>
            <h1 className="py-[20px] text-[20px] font-bold leading-[20px] md:text-[26px]">
              1:1 문의하기
            </h1>

            <button
              type="button"
              className="hidden flex-shrink-0 items-center justify-center gap-[2px] rounded border border-[#888888] px-[20px] py-[13.5px] text-[14px] font-bold leading-[16.71px] md:flex"
            >
              <Icon.Write size="16" />
              <span>글 쓰기</span>
            </button>
          </section>

          <section className="divide-y border-y">
            {Array.from({ length: 10 }).map((_, idx) => (
              <article
                key={idx}
                className="flex flex-col gap-[12px] px-[16px] py-[20px]"
              >
                <div className="flex gap-[12px]">
                  <span className="flex-shrink-0 rounded border border-[#3162FD] px-[12px] py-[4px] text-[12px] font-bold leading-[14.32px] text-[#3162FD]">
                    시스템
                  </span>
                  <div className="flex flex-1 items-center overflow-hidden">
                    <span className="truncate">문의 있습니다.</span>
                    <span className="font-bold text-[#3162FD]">(2)</span>
                  </div>
                </div>

                <div className="flex gap-[12px] overflow-hidden">
                  <span className="text-[12px] leading-[12px] text-[#888888]">
                    오현지
                  </span>
                  <span className="text-[12px] leading-[12px] text-[#888888]">
                    2024-06-17
                  </span>
                  <span className="text-[12px] leading-[12px] text-[#888888]">
                    첨부파일 O
                  </span>
                </div>
              </article>
            ))}
          </section>

          <section className="mx-[16px] mb-[40px] mt-[20px] md:mb-[60px]">
            <section>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-1 rounded border border-[#888888] py-[12px] text-[20px] font-bold leading-[23.87px] md:hidden"
              >
                <Icon.Write />
                <span>글 쓰기</span>
              </button>
            </section>

            <section className="mt-[40px]">페이지네이션</section>
            <section className="mt-[20px] flex gap-[8px]">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className="h-[44px] flex-1 rounded border border-[#C4C4C4] px-[16px] text-[14px] placeholder:text-[#C4C4C4]"
              />
              <button
                type="submit"
                className="h-[44px] flex-shrink-0 rounded bg-[#3162FD] px-[40px] font-bold text-white"
              >
                찾기
              </button>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
