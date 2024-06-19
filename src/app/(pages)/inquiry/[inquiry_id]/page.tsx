'use client'

import { PATH_NAME } from '@/constants/pathName'
import { useMediaQuery } from '@/hooks/common/useMediaQuery'
import { Icon } from '@/svgs/icons'
import Link from 'next/link'

export default function InquiryDetailPage() {
  const { isMobile } = useMediaQuery()

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

          <section className="my-[32px] max-h-[200px] overflow-auto px-[16px] md:my-[40px] md:max-h-[300px] md:px-[20px]">
            안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행
            해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은
            오류가 발생 하는데 확인 해주세요. 안녕하세요, 시스템 문의 내용
            입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다.
            첨부파일 확인 해봐도 안됩니다. 안녕하세요, 시스템 문의 내용 입니다.
            최근 업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일
            확인 해봐도 안됩니다. 위와 같은 오류가 발생 하는데 확인 해주세요.
            안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행
            해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 안녕하세요,
            시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데
            작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가
            발생 하는데 확인 해주세요. 안녕하세요, 시스템 문의 내용 입니다. 최근
            업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인
            해봐도 안됩니다. 안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트
            내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도
            안됩니다. 위와 같은 오류가 발생 하는데 확인 해주세요. 안녕하세요,
            시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데
            작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 안녕하세요, 시스템
            문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
            안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
            하는데 확인 해주세요. 안녕하세요, 시스템 문의 내용 입니다. 최근
            업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인
            해봐도 안됩니다. 안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트
            내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도
            안됩니다. 위와 같은 오류가 발생 하는데 확인 해주세요. 안녕하세요,
            시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데
            작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 안녕하세요, 시스템
            문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
            안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
            하는데 확인 해주세요. 안녕하세요, 시스템 문의 내용 입니다. 최근
            업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인
            해봐도 안됩니다. 안녕하세요, 시스템 문의 내용 입니다. 최근 업데이트
            내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도
            안됩니다. 위와 같은 오류가 발생 하는데 확인 해주세요. 안녕하세요,
            시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데
            작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다. 안녕하세요, 시스템
            문의 내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
            안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
            하는데 확인 해주세요. 안녕하세요, 시스템 문의 내용 입니다. 최근
            업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일 확인
            해봐도 안됩니다.
          </section>

          <section className="mt-[40px] flex flex-col flex-wrap gap-[8px] px-[16px] md:mx-0 md:mt-[60px] md:w-1/2 md:flex-row md:px-[20px]">
            <button className="flex h-[41px] items-center justify-between gap-[33px] border border-[#C4C4C4] px-[12px] text-[14px]">
              <span className="truncate leading-[16.71px]">오류.pdf</span>
              <Icon.FileDownload />
            </button>
            <button className="flex h-[41px] items-center justify-between gap-[33px] border border-[#C4C4C4] px-[12px] text-[14px]">
              <span className="truncate leading-[16.71px]">
                오류_파일검토.pdf
              </span>
              <Icon.FileDownload />
            </button>
            <button className="flex h-[41px] items-center justify-between gap-[33px] border border-[#C4C4C4] px-[12px] text-[14px]">
              <span className="truncate leading-[16.71px]">사용설명서.pdf</span>
              <Icon.FileDownload />
            </button>
            <button className="flex h-[41px] w-full items-center justify-between gap-[33px] border border-[#C4C4C4] px-[12px] text-[14px]">
              <span className="truncate leading-[16.71px]">
                오류_신규업데이트_파일검토_사용설명서_첨부파일.pdf
              </span>
              <Icon.FileDownload />
            </button>
          </section>

          <div className="my-[40px] h-[1px] w-full border-b border-dashed" />

          <section className="flex justify-between px-[16px] md:mx-0 md:px-[20px]">
            <div className="contents gap-[8px] md:flex">
              <button className="h-[44px] rounded border border-[#c4c4c4] px-[28px] text-[14px] leading-[16.71px]">
                목록으로
              </button>
              <button className="h-[44px] rounded border border-[#c4c4c4] px-[28px] text-[14px] leading-[16.71px]">
                수정하기
              </button>
            </div>
            <Link href={PATH_NAME.INQUIRY_WRITE}>
              <button className="h-[44px] rounded border border-[#c4c4c4] px-[28px] text-[14px] leading-[16.71px]">
                새 글쓰기
              </button>
            </Link>
          </section>

          <section className="mt-[40px] px-[16px] md:px-[20px]">
            <h2 className="text-[20px] font-bold">
              댓글 <span className="text-[#3162FD]">(2)</span>
            </h2>

            <section className="divide-y divide-[#DEE2E6] md:mt-[20px]">
              <article className="space-y-[12px] py-[20px]">
                <div className="flex gap-[8px]">
                  <span className="font-bold">박경준</span>
                  <span className="h-[22px] place-content-center rounded border border-[#3162FD] px-[8px] text-[12px] leading-[14.4px] text-[#3162FD]">
                    작성자
                  </span>
                </div>
                <div className="max-h-[200px] overflow-auto text-[14px] leading-[19.6px] text-[#333333]">
                  안녕하세요, 작성자 입니다. 시스템 문의 내용 입니다. 최근
                  업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다. 첨부파일
                  확인 해봐도 안됩니다. 위와 같은 오류가 발생 하는데 확인
                  해주세요. 안녕하세요, 작성자 입니다. 시스템 문의 내용 입니다.
                  최근 업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다.
                  첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생 하는데
                  확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의 내용
                  입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 안녕하세요, 작성자 입니다. 시스템 문의
                  내용 입니다. 최근 업데이트 내용 확인 후 진행 해봤는데 작동이
                  안됩니다. 첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생
                  하는데 확인 해주세요. 하는데 확인 해주세요. 안녕하세요, 작성자
                  입니다. 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후
                  진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다.
                  위와 같은 오류가 발생 하는데 확인 해주세요. 안녕하세요, 작성자
                  입니다. 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후
                  진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다.
                  위와 같은 오류가 발생 하는데 확인 해주세요. 안녕하세요, 작성자
                  입니다. 시스템 문의 내용 입니다. 최근 업데이트 내용 확인 후
                  진행 해봤는데 작동이 안됩니다. 첨부파일 확인 해봐도 안됩니다.
                  위와 같은 오류가 발생 하는데 확인 해주세요. 하는데 확인
                  해주세요. 안녕하세요, 작성자 입니다. 시스템 문의 내용 입니다.
                  최근 업데이트 내용 확인 후 진행 해봤는데 작동이 안됩니다.
                  첨부파일 확인 해봐도 안됩니다. 위와 같은 오류가 발생 하는데
                  위와 같은 오류가 발생 하는데 확인 해주세요.
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="text-[14px] text-[#888888]">24/01/05</span>
                  <span className="text-[14px] text-[#888888]">14:30</span>
                  <span className="h-[24px] place-content-center border border-[#C4C4C4] px-[10px] text-[14px] text-[#888888]">
                    삭제
                  </span>
                  <span className="h-[24px] place-content-center border border-[#C4C4C4] px-[10px] text-[14px] text-[#888888]">
                    수정
                  </span>
                </div>
              </article>
            </section>
          </section>
          <section className="mb-[56px] mt-[20px] px-[16px] md:px-[20px]">
            <section className="relative flex w-full gap-[8px]">
              <input
                type="text"
                placeholder="댓글을 입력 해주세요."
                className="min-w-0 flex-1 rounded border border-[#C4C4C4] px-[16px] text-[14px] placeholder:text-[#C4C4C4] md:hidden"
              />
              <textarea
                rows={3}
                placeholder="댓글을 입력 해주세요."
                className="box-border hidden flex-1 resize-none overflow-hidden rounded-[12px] border border-[#C4C4C4] px-[20px] py-[20px] pr-[188px] text-[14px] leading-[24px] placeholder:text-[#C4C4C4] md:block"
              />

              <button
                type="submit"
                className="bottom-[20px] right-[20px] h-[44px] rounded bg-[#3162FD] px-[30px] font-bold text-white md:absolute md:px-[60px]"
              >
                등록
              </button>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}
