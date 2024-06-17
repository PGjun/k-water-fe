'use client'

import { useMediaQuery } from '@/hooks/common/useMediaQuery'
import { Icon } from '@/svgs/icons'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface SearchParams {
  [key: string]: string | object | undefined // 모든 추가적인 문자열 키는 string 값을 가질 수 있음
  page_num: string // 필수 속성
}

/**
 * 쿼리 파라미터를 이용한 페이지네이션
 * @param totalPage - 리스트 전체 데이터 개수
 * @param page_num - 검색 파라미터 page_num은 오버라이딩
 */
export const Pagination = ({
  // path,
  pathname,
  totalPage = 1,
  page_num = '1',
}: {
  // path: (params: SearchParams) => string
  pathname: string
  totalPage?: number
  page_num?: string
}) => {
  const router = useRouter()
  const { isMobile } = useMediaQuery()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const page = Number(page_num)
  // 전체 페이지 수 계산
  const total = Math.floor(totalPage)

  const handlePageClick = (number: number) => {
    router.push(`${pathname}?page_num=${number}`)
  }

  // 페이지네이션 로직
  const renderPagination = (type: 'mobile' | 'desktop' = 'desktop') => {
    const selected = `rounded-lg bg-[#F3F5FF] font-bold text-[#2262C6] text-[14px] md:text-[16px]`
    const hover = `hover:font-bold hover:text-[#2262C6] text-[14px] md:text-[16px]`
    const btnSize = `h-[35px] md:h-[40px] w-[35px] md:w-[40px]`

    let items = []

    if (total <= 5) {
      // 전체 페이지 수가 5 이하인 경우 모든 페이지 번호를 표시합니다.
      for (let number = 1; number <= total; number++) {
        items.push(
          <button
            key={number}
            className={`${number === page ? selected : hover} ${btnSize}`}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>,
        )
      }
    } else {
      let leftSide
      let rightSide
      let startView
      let lastView

      if (type === 'mobile') {
        leftSide = Math.max(1, page - 1) // 시작 페이지는 항상 1 이상
        rightSide = Math.min(total, page + 1) // 끝 페이지는 항상 total 이하
        startView = 3
        lastView = total - 2
      } else {
        leftSide = Math.max(1, page - 2) // 시작 페이지는 항상 1 이상
        rightSide = Math.min(total, page + 2) // 끝 페이지는 항상 total 이하
        startView = 5
        lastView = total - 4
      }

      // 현재 페이지가 시작지점 N 이하인 경우
      if (page < startView) {
        rightSide = startView // 1부터 N까지 보여줍니다.
      }
      // 현재 페이지가 마지막지점 N 이상인 경우
      else if (page > lastView) {
        leftSide = lastView // N 부터 마지막을 보여줍니다.
      }

      // 앞에 '...'를 추가할 필요가 있는지 결정합니다.
      if (leftSide > 1) {
        items.push(
          <button
            key="1"
            className={`${hover} ${btnSize}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>,
        )
        // '...' 추가
        if (leftSide > 2) {
          items.push(<span key="left-ellipsis">...</span>)
        }
      }

      // 현재 페이지 범위의 페이지 버튼들
      for (let number = leftSide; number <= rightSide; number++) {
        items.push(
          <button
            key={number}
            className={`${number === page ? selected : hover} ${btnSize}`}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>,
        )
      }

      // 뒤에 '...'를 추가할 필요가 있는지 결정합니다.
      if (rightSide < total) {
        // '...' 추가
        if (rightSide < total - 1) {
          items.push(<span key="right-ellipsis">...</span>)
        }
        items.push(
          <button
            key={total}
            className={`${hover} ${btnSize}`}
            onClick={() => handlePageClick(total)}
          >
            {total}
          </button>,
        )
      }
    }
    return items
  }

  return (
    <div className="flex h-[35px] items-center gap-2 md:h-[40px] md:gap-3">
      <button
        onClick={() => handlePageClick(page - 1)}
        disabled={page === 1}
        className={`${page === 1 ? 'text-#A3A3A3' : 'text-#333333'} flex items-center gap-3 text-[14px] md:text-[16px]`}
      >
        <Icon.Arrow color={page === 1 ? '#A3A3A3' : '#333333'} />
        <span
          className={`hidden md:block ${page === 1 ? 'text-[#A3A3A3]' : 'text-[#333333]'}`}
        >
          이전
        </span>
      </button>
      {mounted &&
        (isMobile ? renderPagination('mobile') : renderPagination('desktop'))}
      <button
        onClick={() => handlePageClick(page + 1)}
        disabled={page === total}
        className={`${page === total ? 'text-#A3A3A3' : 'text-#333333'} flex items-center gap-3 text-[14px] md:text-[16px]`}
      >
        <span
          className={`hidden md:block ${page === total ? 'text-[#A3A3A3]' : 'text-[#333333]'}`}
        >
          다음
        </span>
        <Icon.Arrow
          color={page === total ? '#A3A3A3' : '#333333'}
          rotate={true}
        />
      </button>
    </div>
  )
}
