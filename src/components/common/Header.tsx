// Header.tsx

'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLogo from '/public/images/header_logo.png'
import MheaderLogo from '/public/images/m_header_logo.png'
import Link from 'next/link'
import { MobileNavMenu, navMenuList } from './MobileNavMenu'

export const Header = () => {
  const currentPath = usePathname()

  if (currentPath.startsWith('/login') || currentPath.startsWith('/join'))
    return null
  return (
    <header>
      <div className="flex h-[60px] items-center justify-center border-b md:h-[72px] md:border-none md:bg-[#F3F5FF]">
        <section className="relative mx-[16px] flex flex-1 items-center justify-center md:hidden">
          <div className="absolute left-0 md:hidden">
            <MobileNavMenu />
          </div>
          <Image src={MheaderLogo} alt="logo"></Image>
        </section>

        <section className="mx-[16px] hidden max-w-[1200px] flex-1 items-center justify-between md:flex">
          <div className="flex items-center justify-center gap-[30px]">
            <Image src={HeaderLogo} alt="logo"></Image>
            <div>
              {navMenuList.map((item, idx) => {
                const basePath = item.path.split('?')[0]
                const isSelected =
                  basePath === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(basePath)

                return (
                  <Link key={idx} href={item.path}>
                    <button
                      className={`h-[72px] px-[20px] pt-[4px] text-[20px] font-bold ${isSelected ? 'border-b-4 border-[#3162FD] text-[#3162FD]' : 'text-[#888888]'}`}
                    >
                      {item.name}
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-[16px]">
            <span className="text-[18px]">
              <span className="font-bold">홍길동</span>님
            </span>
            <button
              onClick={() => signOut()}
              className="h-[36px] rounded-[8px] bg-white px-[16px] text-[14px]"
            >
              로그아웃
            </button>
          </div>
        </section>
      </div>
    </header>
  )
}
