import { useState, useEffect } from 'react'

// 미디어 쿼리를 인자로 받아 해당 쿼리에 맞는지 여부를 반환하는 훅
export const useMediaQuery = (breakpoint = 'md') => {
  let query = ''

  if (breakpoint === 'md') query = '(max-width: 768px)'

  //익명함수로 초기값이 정확한 값을 가지게 함
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

    // 첫 마운트 시 상태 설정
    setMatches(media.matches)

    // 이벤트 리스너 등록
    media.addEventListener('change', listener)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => media.removeEventListener('change', listener)
  }, [query])

  return { isMobile: matches }
}
