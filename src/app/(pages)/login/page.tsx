'use client'

import { signIn } from 'next-auth/react'
import { Img } from '@/svgs/images'
import { Icon } from '@/svgs/icons'
import { useState } from 'react'
import { usePushRouter } from '@/hooks/common/usePushRouter'
import { Layout } from '@/components/common/layouts'

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
      <form action={handleSubmit} className="overflow-hidden bg-[#fff]">
        <div className="flex flex-col items-center justify-start gap-[32px]">
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <Img.MainLogo />
            <div className="whitespace-nowrap text-center text-[18px] leading-[100%] text-[#333]">
              <span className="font-bold">수자원공사 </span>
              <span className="">교육 영상 플랫폼</span>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <section className="group relative h-[60px] w-[343px] shrink-0 text-[14px] md:h-[83px] md:w-[560px] md:text-[18px]">
              <input
                className="absolute bottom-0 left-0 right-0 top-[11.7%] rounded-[12px] border-[1px] border-solid border-[#888] pl-[4.15%] outline-[#3162fd] placeholder:text-[#c4c4c4]"
                placeholder="아이디를 입력하세요."
                type="text"
                name="username"
                required
              />
              <div className="absolute bottom-[76.6%] left-[3.37%] right-[90.74%] top-0 flex flex-row items-center justify-center overflow-hidden bg-[#fff] px-[8px] py-0">
                <div className="whitespace-nowrap text-[12px] leading-[120%] text-[#666] group-focus-within:text-[#3162fd] md:text-[18px]">
                  ID
                </div>
              </div>
            </section>
            <section className="group relative h-[60px] w-[343px] shrink-0 text-[14px] md:h-[83px] md:w-[560px] md:text-[18px]">
              <input
                className="absolute bottom-0 left-0 right-0 top-[11.7%] rounded-[12px] border-[1px] border-solid border-[#888] pl-[4.15%] outline-[#3162fd] placeholder:text-[#c4c4c4]"
                placeholder="비밀번호를 입력하세요."
                type="password"
                name="password"
                required
              />
              <div className="absolute bottom-[76.6%] left-[3.19%] right-[79.49%] top-0 flex flex-row items-center justify-center overflow-hidden bg-[#fff] px-[8px] py-0">
                <div className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#666] group-focus-within:text-[#3162fd] md:text-[18px]">
                  Password
                </div>
              </div>
            </section>
            <section className="flex flex-row items-center justify-start gap-[8px] pb-0 pl-[4px] pr-0 pt-0">
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
                className="relative h-[18px] w-[18px] shrink-0"
              >
                {keepLogin ? <Icon.CheckBoxOn /> : <Icon.CheckBoxOff />}
              </label>
              <label
                htmlFor="keepLogin"
                className="whitespace-nowrap text-[12px] font-medium leading-[120%] text-[#888] md:text-[16px]"
              >
                로그인 유지
              </label>
            </section>
          </div>
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <button
              type="submit"
              className="flex w-[343px] flex-row items-center justify-center overflow-hidden rounded-[4px] bg-[#3162fd] px-[143px] py-[20px] md:w-[560px]"
            >
              <div className="whitespace-nowrap text-center text-[18px] font-bold leading-[140%] text-[#fff] md:text-[20px]">
                로그인
              </div>
            </button>
            <div className="flex flex-row items-center justify-start gap-[8px] text-[14px] md:text-[16px]">
              <div className="whitespace-nowrap font-medium leading-[80%] text-[#888]">
                처음이신가요?
              </div>
              <button type="button" onClick={() => push('JOIN_AGREE')}>
                <u className="text-decoration-[underline] whitespace-nowrap font-medium leading-[140%] text-[#666]">
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
