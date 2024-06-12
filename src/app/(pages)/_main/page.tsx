'use client'

import { Icon } from '@/svgs/icons'
import SearchMenu from '/public/images/search_menu.png'
import Image from 'next/image'
import { MobileDetailSearch } from '@/components/main/MobileDetailSearch'
import useModalStore from '@/stores/modalStore'
// import { authOptions } from '@/app/api/auth/authOptions'
// import { getServerSession } from 'next-auth'

export default function MainPage() {
  // const session = await getServerSession(authOptions)
  const { openModal, closeModal } = useModalStore()

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <div className="mx-[16px] h-full max-w-[343px] flex-1 md:max-w-[1200px]">
          <section className="my-[20px] flex h-[44px] gap-[8px] md:my-[60px]">
            <section className="relative h-full flex-1 rounded-[4px] border border-[#3162FD]">
              <input
                type="text"
                className="h-full w-full pl-[12px] pr-[44px] text-[12px] outline-[#3162FD] placeholder:text-[#C4C4C4] md:pl-[24px] md:text-[16px]"
                placeholder="검색어를 입력해주세요"
              />
              <div className="absolute right-[13px] top-[11px]">
                <Icon.Search />
              </div>
            </section>
            <button
              className="flex h-full min-w-[56px] items-center justify-center rounded-[4px] bg-[#3162FD] md:min-w-[143px]"
              onClick={() =>
                openModal(<MobileDetailSearch closeModal={closeModal} />)
              }
            >
              <div className="flex h-full w-full items-center justify-center md:hidden">
                <Image src={SearchMenu} alt="search" width={20} />
              </div>
              <div className="hidden h-full w-full items-center justify-center gap-[4px] md:flex">
                <Image
                  src={SearchMenu}
                  alt="search"
                  className="h-[13.53px] w-[16.43px]"
                />
                <span className="text-[18px] text-white">상세검색</span>
              </div>
            </button>
          </section>

          <section className="grid grid-cols-1 gap-x-[30px] gap-y-[40px] md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
              <section key={idx} className="flex flex-col gap-[16px]">
                <div className="h-[190px] w-full rounded-[16px] bg-slate-100"></div>
                <div>
                  <div className="truncate text-[20px] font-bold leading-[24px] text-[#333333]">
                    핸드 커팅기 조심
                  </div>
                  <div className="mt-[8px]">
                    <div className="truncate text-[#666666]">
                      안전 보건 공단 | Youtube | 2024-03-01
                    </div>
                    <div className="truncate text-[12px] text-[#888888]">
                      재해 유형 : 절단·베임·찔림 | 산업
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </section>

          <section className="my-[40px]">pagination</section>
        </div>
      </div>
    </div>
  )
}
