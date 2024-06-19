import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PATH_NAME } from '@/constants/pathName'
import { Icon } from '@/svgs/icons'
import { signOut } from 'next-auth/react'
import { Img } from '@/svgs/images'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from '@/hooks/common/useMediaQuery'

export const navMenuList = [
  {
    IconComponent: Icon.NavMain,
    name: '메인',
    path: PATH_NAME.MAIN,
  },
  {
    IconComponent: Icon.NavQuestion,
    name: '자주하는 질문',
    path: PATH_NAME.QUESTION,
  },
  {
    IconComponent: Icon.NavInquiry,
    name: '1:1 문의하기',
    path: PATH_NAME.INQUIRY,
  },
  {
    IconComponent: Icon.NavNotice,
    name: '공지사항',
    path: PATH_NAME.NOTICE,
  },
]

export const MobileNavMenu = ({ handleClose }: { handleClose: () => void }) => {
  const pathname = usePathname()
  const { isMobile } = useMediaQuery()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      handleClose()
    }
    prevPathname.current = pathname
  }, [pathname, handleClose])

  useEffect(() => {
    if (!isMobile) handleClose()
  }, [isMobile, , handleClose])

  return (
    <div className="md:hidden">
      <section
        className={`fixed left-0 top-0 z-50 h-screen w-full transform bg-white`}
      >
        <div className="relative mx-[16px] flex h-[60px] flex-1 items-center justify-center md:hidden">
          <button
            onClick={handleClose}
            className="absolute left-0 flex w-[20px] justify-center md:hidden"
          >
            <Icon.NavBack />
          </button>
          <Img.MainLogoM />
        </div>

        <div className="flex h-[76px] items-center justify-between bg-[#F3F5FF] px-[20px]">
          <span className="text-[20px]">
            <span className="font-bold">홍길동</span>님
          </span>
          <button
            onClick={() => signOut()}
            className="h-[36px] rounded-[8px] border border-[#c4c4c4] bg-white px-[16px] text-[14px]"
          >
            로그아웃
          </button>
        </div>

        <nav className="m-[20px] flex h-full flex-1 flex-col gap-[8px] rounded-tr-[68px]">
          {navMenuList.map((item, idx) => {
            const basePath = item.path.split('?')[0]
            const isSelected =
              basePath === '/'
                ? pathname === '/'
                : pathname.startsWith(basePath)

            const normal = 'bg-white text-[#888888]'
            const selected = 'text-[#3162FD]'

            return (
              <Link key={idx} href={item.path}>
                <button
                  className={`flex h-[50px] w-full items-center gap-[8px] rounded-full text-[20px] font-bold ${isSelected ? selected : normal}`}
                >
                  <item.IconComponent
                    color={isSelected ? '#3162FD' : '#888888'}
                  />
                  {item.name}
                </button>
              </Link>
            )
          })}
        </nav>
      </section>
    </div>
  )
}
