// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // JWT 비밀 키
  const secret = process.env.NEXTAUTH_SECRET

  // 세션 토큰 가져오기
  const token = await getToken({ req: request, secret })

  // URL 클론 생성
  const url = request.nextUrl.clone()

  // 사용자가 인증되지 않았고 루트 경로에 접근하는 경우
  if (!token && url.pathname === '/') {
    url.pathname = '/login' // /login 페이지로 리디렉션
    return NextResponse.redirect(url)
  }

  return NextResponse.next() // 인증된 경우 다음으로 진행
}

// 미들웨어가 적용될 경로 지정
export const config = {
  matcher: '/', // 루트 경로에만 미들웨어 적용
}
