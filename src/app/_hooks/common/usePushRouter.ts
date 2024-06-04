import { PATH_NAME, ROUTE_CODE } from '@/constants/pathName'
import { useRouter } from 'next/navigation'

export const usePushRouter = () => {
  const router = useRouter()

  const push = (key: ROUTE_CODE, queryParams?: Record<string, any>) => {
    let url = PATH_NAME[key] // 해당 라우트의 기본 URL 가져오기

    // 쿼리 스트링이 제공되면 URL에 추가
    if (queryParams) {
      const query = new URLSearchParams(queryParams).toString()
      url += `?${query}`
    }

    router.push(url)
  }

  return {
    push,
  }
}
