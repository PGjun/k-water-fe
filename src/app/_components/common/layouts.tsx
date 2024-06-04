import { ReactNode } from 'react'

const Default = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {children}
    </div>
  )
}

const Join = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F6F6F6]">
      {children}
    </div>
  )
}

export const Layout = {
  Default,
  Join,
}
