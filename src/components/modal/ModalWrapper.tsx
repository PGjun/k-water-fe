// components/ModalWrapper.js

'use client'

import useModalStore from '@/stores/modalStore'
import { useEffect } from 'react'

const ModalWrapper = () => {
  const { component, closeModal } = useModalStore()

  // 브라우저 뒤로가기 방지
  useEffect(() => {
    document.body.style.overflow = component ? 'hidden' : 'auto'
    if (!component) return

    const handlePopState = () => {
      closeModal()
    }

    window.history.pushState(null, '', window.location.href)
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [component, closeModal])

  if (!component) return null
  return (
    <div
      className={`fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-50 md:flex`}
      onClick={closeModal}
    >
      <div
        className="relative h-full md:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {component}
      </div>
    </div>
  )
}

export default ModalWrapper
