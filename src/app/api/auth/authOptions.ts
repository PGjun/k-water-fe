// /api/auth/authOptions.ts

import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { api } from '@/services/api'

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

        const res = await api.login({
          username: credentials.username,
          password: credentials.password,
        })
        if (res.status === 200) {
          const resData = res.data
          console.log('🚀 ~ authorize: ~ resData:', resData)
          console.log('유저 로그인 성공')
          return {
            ...resData,
            keepLogin: credentials.keepLogin === 'true',
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
