// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// 인증이 필요 없는 페이지 경로
const publicRoutes = [
  '/login', // 로그인 페이지
  '/join/agree', // 가입 페이지
  '/join/begin', // 가입 페이지
]

export async function middleware(request: NextRequest) {
  // JWT 비밀 키
  const secret = process.env.NEXTAUTH_SECRET

  // 세션 토큰 가져오기
  const token = await getToken({ req: request, secret })

  // URL 클론 생성
  const url = request.nextUrl.clone()

  // 인증이 필요 없는 페이지에 대한 접근은 항상 허용
  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next()
  }

  // 사용자가 인증되지 않았고 인증이 필요한 페이지에 접근하는 경우
  if (!token) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next() // 인증된 경우 다음으로 진행
}

// 미들웨어가 적용될 경로 지정
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'], // 모든 페이지에 미들웨어 적용
}
