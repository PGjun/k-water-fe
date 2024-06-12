'use client'

import { Icon } from '@/svgs/icons'

export const MobileDetailSearch = ({
  closeModal,
}: {
  closeModal: () => void
}) => {
  return (
    <section className="flex h-screen flex-col bg-white md:h-auto md:rounded-[20px] md:px-[80px] md:pb-[60px] md:pt-[80px]">
      <section className="flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] px-[16px] py-[20px] md:w-[640px] md:border-0 md:px-0 md:pb-0">
        <button type="button" onClick={() => closeModal()}>
          <Icon.Back />
        </button>
        <div className="flex flex-row items-end justify-start gap-[8px]">
          <div className="whitespace-nowrap text-[18px] font-bold leading-[100%] text-[#333] md:text-[26px]">
            상세검색
          </div>
        </div>
      </section>

      <section>여기가 내용</section>
    </section>
  )
}
