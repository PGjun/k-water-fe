import { Icon } from '@/svgs/icons'

export default function InquiryDetailPage() {
  const renderAttachTag = (attachCount = 0) => {
    const enable = 'bg-[#F3F5FF] text-[#3162FD]'
    const disable = 'bg-[#F3F3F3] text-[#888888]'
    return (
      <div
        className={`hidden h-[26px] w-[54px] items-center justify-center gap-1 rounded md:flex ${attachCount ? enable : disable}`}
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
          <section className="flex items-center gap-[12px] px-[16px] md:items-end md:justify-between md:px-0">
            <div className="md:hidden">
              <Icon.NavBack />
            </div>
            <h1 className="py-[20px] text-[20px] font-bold leading-[20px] md:text-[26px]">
              1:1 문의내용
            </h1>
          </section>

          <section className="border-y border-[#c4c4c4] bg-[#F4F4F4]">
            <section className="flex flex-col gap-[12px] p-[20px] md:contents md:divide-y md:divide-[#c4c4c4]">
              <article className="flex items-center gap-[12px] md:h-[86px] md:justify-center">
                <span className="flex-shrink-0 rounded border border-[#3162FD] px-[12px] py-[4px] text-[12px] font-bold leading-[14.32px] text-[#3162FD]">
                  시스템
                </span>
                <div className="flex items-center overflow-hidden font-bold">
                  <span className="truncate">문의 있습니다.</span>
                  <span className="text-[#3162FD]">(2)</span>
                </div>
              </article>

              <article className="flex gap-[12px] overflow-hidden text-[12px] leading-[12px] text-[#888888] md:items-center md:justify-between md:bg-white md:p-[15px] md:text-[14px] md:text-[#333333]">
                <div className="contents md:flex md:gap-[20px]">
                  <div>
                    <span className="hidden md:inline">작성자 : </span>
                    <span className="md:font-bold">박경준</span>
                  </div>
                  <div>
                    <span className="hidden md:inline">등록일 : </span>
                    <span className="md:font-bold">2024-06-17</span>
                  </div>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="md:hidden">첨부파일 0</span>
                  <span className="hidden md:inline">첨부파일</span>
                  {renderAttachTag(2)}
                </div>
              </article>
            </section>
          </section>

          <section className="px-[16px] py-[32px] md:px-[20px] md:py-[40px]">
            <div>
              안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후
              진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와
              같은 오류가 발생 하는데 확인 해주세요. 안녕하세요, 시스템 문의
              내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
              안됩니다. 첨부파일 확인 해봐도 안됩니다.
            </div>
          </section>

          <section className="mt-[40px] px-[16px] md:mx-0 md:px-[20px]">
            <div className="h-[50px] w-full border"></div>
          </section>

          <div className="my-[40px] h-[1px] w-full border-b border-dashed" />

          <section className="flex justify-between gap-[8px] px-[16px] py-[40px] md:mx-0 md:px-[20px]">
            <button className="h-[50px] border px-[28px]"></button>
            <button className="h-[50px] border px-[28px]"></button>
            <button className="h-[50px] border px-[28px]"></button>
          </section>
        </section>
      </div>
    </div>
  )
}
