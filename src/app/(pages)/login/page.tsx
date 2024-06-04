'use client'

import { signIn } from 'next-auth/react'
import { Img } from '@/svgs/images'
import { Icon } from '@/svgs/icons'
import { useState } from 'react'
import { usePushRouter } from '@/app/_hooks/common/usePushRouter'
import { Layout } from '@/app/_components/common/layouts'

export default function LoginPage() {
  const { push } = usePushRouter()

  const [keepLogin, setKeepLogin] = useState(false)

  async function handleSubmit(formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    const result = await signIn('credentials', {
      username,
      password,
      keepLogin, // 로그인 유지 상태 전송
      redirect: false, // 페이지 리디렉션 방지
    })

    if (result && result?.status === 200) {
      push('MAIN')
    }
  }

  const handleKeepLogin = () => {
    setKeepLogin(!keepLogin)
  }

  return (
    <Layout.Default>
      <form action={handleSubmit} className="bg-[#fff] overflow-hidden">
        <div className="flex flex-col items-center justify-start gap-[32px]">
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <Img.MainLogo />
            <div className="text-[18px] leading-[100%] text-[#333] text-center whitespace-nowrap">
              <span className="font-bold">수자원공사 </span>
              <span className="">교육 영상 플랫폼</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <section className="group relative w-[343px] md:w-[560px] h-[60px] md:h-[83px] shrink-0 text-[14px] md:text-[18px]">
              <input
                className="absolute pl-[4.15%] left-0 right-0 top-[11.7%] bottom-0 border-[1px] border-solid border-[#888] outline-[#3162fd] rounded-[12px] placeholder:text-[#c4c4c4]"
                placeholder="아이디를 입력하세요."
                type="text"
                name="username"
                required
              />
              <div className="absolute left-[3.37%] right-[90.74%] top-0 bottom-[76.6%] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] overflow-hidden">
                <div className="group-focus-within:text-[#3162fd] leading-[120%] text-[12px] md:text-[18px] text-[#666] whitespace-nowrap">
                  ID
                </div>
              </div>
            </section>
            <section className="group relative w-[343px] md:w-[560px] h-[60px] md:h-[83px] shrink-0 text-[14px] md:text-[18px]">
              <input
                className="absolute pl-[4.15%] left-0 right-0 top-[11.7%] bottom-0 border-[1px] border-solid border-[#888] outline-[#3162fd] rounded-[12px] placeholder:text-[#c4c4c4]"
                placeholder="비밀번호를 입력하세요."
                type="password"
                name="password"
                required
              />
              <div className="absolute left-[3.19%] right-[79.49%] top-0 bottom-[76.6%] flex flex-row items-center justify-center py-0 px-[8px] bg-[#fff] overflow-hidden">
                <div className="group-focus-within:text-[#3162fd] leading-[120%] text-[12px] md:text-[18px] font-medium text-[#666] whitespace-nowrap">
                  Password
                </div>
              </div>
            </section>
            <section className="flex flex-row items-center justify-start gap-[8px] pt-0 pr-0 pb-0 pl-[4px]">
              <input
                type="checkbox"
                name="keepLogin"
                id="keepLogin"
                hidden
                checked={keepLogin}
                onChange={handleKeepLogin}
              />
              <label
                htmlFor="keepLogin"
                className="relative w-[18px] h-[18px] shrink-0"
              >
                {keepLogin ? <Icon.CheckBoxOn /> : <Icon.CheckBoxOff />}
              </label>
              <label
                htmlFor="keepLogin"
                className="text-[12px] md:text-[16px] leading-[120%]  font-medium text-[#888] whitespace-nowrap"
              >
                로그인 유지
              </label>
            </section>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <button
              type="submit"
              className="w-[343px] md:w-[560px] flex flex-row items-center justify-center py-[20px] px-[143px] bg-[#3162fd] rounded-[4px] overflow-hidden"
            >
              <div className="text-[18px] md:text-[20px] leading-[140%] font-bold text-[#fff] text-center whitespace-nowrap">
                로그인
              </div>
            </button>
            <div className="flex flex-row items-center justify-start gap-[8px] text-[14px] md:text-[16px]">
              <div className="leading-[80%] font-medium text-[#888] whitespace-nowrap">
                처음이신가요?
              </div>
              <button type="button" onClick={() => push('JOIN_AGREE')}>
                <u className="leading-[140%] font-medium text-decoration-[underline] text-[#666] whitespace-nowrap">
                  회원가입
                </u>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout.Default>
  )
}
