import { ReactNode } from 'react'

const Default = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-[16px] w-[343px] md:mx-0 md:w-full">{children}</div>
    </div>
  )
}

const Join = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen justify-center md:items-center md:bg-[#F6F6F6]">
      {children}
    </div>
  )
}

export const Layout = {
  Default,
  Join,
}
