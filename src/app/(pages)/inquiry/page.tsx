import { Pagination } from '@/components/common/Pagination'
import { Icon } from '@/svgs/icons'
import Link from 'next/link'

export default function InquiryPage() {
  const renderAttachTag = (attachCount = 0) => {
    const enable = 'bg-[#F3F5FF] text-[#3162FD]'
    const disable = 'bg-[#F3F3F3] text-[#888888]'
    return (
      <div
        className={`hidden h-[26px] w-[54px] items-center justify-center gap-1 place-self-center rounded md:flex ${attachCount ? enable : disable}`}
      >
        <Icon.AttachedFile color={attachCount ? '#3162FD' : '#888888'} />
        {attachCount}
      </div>
    )
  }

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

          <section className="border-b border-[#C4C4C4] md:mt-[24px] md:border">
            <section className="hidden h-[60px] place-items-center bg-[#F4F4F4] md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,4fr)_repeat(3,minmax(0,1fr))]">
              <div>번호</div>
              <div>제목</div>
              <div>작성자</div>
              <div>등록일</div>
              <div>첨부파일</div>
            </section>

            {Array.from({ length: 10 }).map((_, idx) => (
              <Link key={idx} href={'/inquiry/1'}>
                <article className="group flex h-[86px] flex-col place-content-center gap-[12px] border-t border-[#c4c4c4] px-[20px] md:grid md:h-[60px] md:grid-cols-[minmax(0,1fr)_minmax(0,4fr)_repeat(3,minmax(0,1fr))] md:gap-0 md:px-0">
                  <div className="hidden place-self-center md:block">1</div>

                  <div className="flex items-center gap-[12px]">
                    <span className="rounded border border-[#3162FD] px-[12px] py-[4px] text-[12px] font-bold leading-[14.32px] text-[#3162FD]">
                      시스템
                    </span>
                    <div className="flex flex-1 items-center overflow-hidden">
                      <span className="truncate group-hover:underline">
                        문의 있습니다. 문의 있습니다. 문의 있습니다. 문의 있습니
                        문의 있습니다. 문의 있습니다. 문의 있습니다. 문의 있습니
                        문의 있습니다. 문의 있습니다. 문의 있습니다.
                      </span>
                      <span className="font-bold text-[#3162FD]">(2)</span>
                    </div>
                  </div>

                  <div className="flex gap-[12px] overflow-hidden text-[12px] leading-[12px] text-[#888888] md:contents md:text-[14px] md:text-[#333333]">
                    <span className="place-self-center">박경준</span>
                    <span className="place-self-center">2024-06-17</span>
                    <span className="md:hidden">첨부파일 0</span>
                    {renderAttachTag(0)}
                  </div>
                </article>
              </Link>
            ))}
          </section>

          <section className="mx-[16px] mb-[40px] mt-[20px] flex flex-col items-center md:mb-[60px]">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1 rounded border border-[#888888] py-[12px] text-[20px] font-bold leading-[23.87px] md:hidden"
            >
              <Icon.Write />
              <span>글 쓰기</span>
            </button>

            <section className="mt-[40px]">
              <Pagination pathname="/inquiry" />
            </section>
            <section className="mt-[20px] flex w-full gap-[8px] md:mt-[40px] md:max-w-[465px]">
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
