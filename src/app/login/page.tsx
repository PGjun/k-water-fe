'use client'

import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function Page() {
  async function handleSubmit(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    const result = await signIn('credentials', {
      username,
      password,
      keepLogin: 'false', // 로그인 유지 상태 전송
      redirect: false, // 페이지 리디렉션 방지
    })

    // const resData = await login(username, password)
    if (result && result?.status === 200) {
      redirect('/')
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  )
}
