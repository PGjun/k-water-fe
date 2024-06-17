'use client'

import { Icon } from '@/svgs/icons'
import SearchMenu from '/public/images/search_menu.png'
import Image from 'next/image'
import useModalStore from '@/stores/modalStore'
import { DetailSearch } from '@/components/modal/DetailSearch'
import { VideoPlayer } from '@/components/modal/VideoPlayer'
import { Pagination } from '@/components/common/Pagination'
import { PATH_NAME } from '@/constants/pathName'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'
import _ from 'lodash'
import { useState } from 'react'
// import { authOptions } from '@/app/api/auth/authOptions'
// import { getServerSession } from 'next-auth'

export default function MainPage({ page_num = '1' }) {
  // const session = await getServerSession(authOptions)
  const { openModal, closeModal } = useModalStore()
  const { register, handleSubmit } = useForm<{ searchWord: string }>()

  const [searchWord, setSearchWord] = useState('')

  const { data: videos } = useQuery({
    queryKey: ['videos', searchWord],
    queryFn: () => api.readVideos({ keyword: searchWord }),
  })

  const onSubmit = async (data: { searchWord: string }) => {
    setSearchWord(data.searchWord)
  }

  const page = page_num
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center">
        <div className="mx-[16px] h-full max-w-[343px] flex-1 md:max-w-[1200px]">
          <section className="my-[20px] flex h-[44px] gap-[8px] md:my-[60px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative h-full flex-1 rounded-[4px] border border-[#3162FD]"
            >
              <input
                type="text"
                className="h-full w-full pl-[12px] pr-[44px] text-[12px] outline-[#3162FD] placeholder:text-[#C4C4C4] md:pl-[24px] md:text-[16px]"
                placeholder="검색어를 입력해주세요"
                {...register('searchWord')}
              />
              <button
                type="submit"
                className="absolute right-[13px] top-[11px]"
              >
                <Icon.Search />
              </button>
            </form>
            <button
              className="flex h-full min-w-[56px] items-center justify-center rounded-[4px] bg-[#3162FD] md:min-w-[143px]"
              onClick={() =>
                openModal(<DetailSearch closeModal={closeModal} />)
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
            {videos &&
              videos.map(
                (
                  {
                    url,
                    title,
                    thumbnail,
                    provider,
                    source_site,
                    upload_date,
                    accident_type,
                    accident_area,
                  },
                  idx,
                ) => (
                  <section
                    key={idx}
                    className="flex cursor-pointer flex-col gap-[16px]"
                    onClick={() => {
                      openModal(
                        <VideoPlayer closeModal={closeModal} url={url} />,
                      )
                    }}
                  >
                    <div className="h-[190px] w-full overflow-hidden rounded-[16px] bg-slate-100">
                      <img
                        src={thumbnail}
                        alt="thumbnail"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="truncate text-[20px] font-bold leading-[24px] text-[#333333]">
                        {title}
                      </div>
                      <div className="mt-[8px]">
                        <div className="truncate text-[#666666]">
                          {provider} | {source_site} | {upload_date}
                        </div>
                        <div className="truncate text-[12px] text-[#888888]">
                          재해 유형 : {accident_type.name} |{' '}
                          {accident_area.name}
                        </div>
                      </div>
                    </div>
                  </section>
                ),
              )}
          </section>

          <section className="my-[40px] flex justify-center md:my-[60px]">
            <Pagination
              pathname={PATH_NAME.MAIN}
              totalPage={22}
              page_num={page}
            />
          </section>
        </div>
      </div>
    </div>
  )
}
