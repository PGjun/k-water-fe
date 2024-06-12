'use client'

import { usePathname } from 'next/navigation'

export const Footer = () => {
  const currentPath = usePathname()

  if (currentPath.startsWith('/login') || currentPath.startsWith('/join'))
    return null
  return (
    <footer>
      <div className="flex h-[257px] flex-1 bg-[#F8F9FA]"></div>
    </footer>
  )
}
