import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/app/actions/login'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials: any) => {
        if (!credentials) return null

        const resData = await login(credentials.username, credentials.password)
        console.log('🚀 ~ authorize: ~ resData:', resData)

        if (resData) {
          console.log('유저 로그인 성공')

          return {
            ...resData,
            keepLogin: credentials.keepLogin === 'true', // 문자열로 전달될 가능성
          }
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ session, token }: any) {
      if (token.user) {
        session.user = token.user
      }
      return session
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user
        //로그인 유지 버튼 활성화 | 비활성화
        token.maxAge = user.keepLogin ? 30 * 24 * 60 * 60 : 12 * 60 * 60 // 30일/12시간
      }
      return token
    },
  },
}
