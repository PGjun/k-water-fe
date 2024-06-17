'use client'

import { Icon } from '@/svgs/icons'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../Input/InputFactory'

interface FormValues {
  title: string
  accident_types: { value: string; label: string }[]
  accident_areas: { value: string; label: string }[]
  date: [Date | null, Date | null]
  drop: { value: string; label: string }
}

export const DetailSearch = ({ closeModal }: { closeModal: () => void }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      title: '',
      accident_types: [],
      accident_areas: [],
      date: [null, null],
    },
  })

  const handleClose = () => {
    closeModal()
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex h-full flex-col overflow-auto bg-white md:h-auto md:max-w-[900px] md:rounded-[20px] md:px-[80px] md:pb-[60px] md:pt-[80px]"
    >
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-7 top-7"
      >
        <Icon.Xmark />
      </button>
      <section className="sticky top-0 flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] bg-white px-[16px] py-[20px] md:w-[640px] md:border-0 md:px-0 md:pb-0">
        <button type="button" onClick={handleClose} className="md:hidden">
          <Icon.Back />
        </button>
        <div className="flex flex-row items-end justify-start gap-[8px]">
          <div className="whitespace-nowrap text-[18px] font-bold leading-[100%] text-[#333] md:text-[26px]">
            상세검색
          </div>
        </div>
      </section>

      <section className="mx-[16px] mb-[20px] mt-[40px] flex flex-1 flex-col gap-[40px] md:mx-0">
        <div className="flex flex-col gap-[12px] md:flex-row md:gap-0">
          <div className="place-content-center text-[18px] font-semibold leading-[90%] text-[#333] md:h-[44px] md:w-[140px]">
            제목
          </div>
          <div className="flex-1">
            <Controller
              name="title"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <Input.Text placeholder="제목 입력" {...rest} />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row md:gap-0">
          <div className="place-content-center text-[18px] font-semibold leading-[90%] text-[#333] md:h-[44px] md:w-[140px]">
            재해 유형
          </div>
          <div className="flex-1">
            <Controller
              name="accident_types"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <Input.MultiSelect
                  {...rest}
                  options={[
                    { value: '1', label: '추락' },
                    { value: '2', label: '사람의 전도' },
                    { value: '3', label: '물체의 전도' },
                    { value: '4', label: '충돌' },
                    { value: '5', label: '비래' },
                    { value: '6', label: '붕괴' },
                    { value: '7', label: '협착' },
                    { value: '8', label: '절단·베인·찔림' },
                    { value: '9', label: '감전' },
                    { value: '10', label: '폭발·파열' },
                    { value: '11', label: '화재' },
                    { value: '12', label: '불균형 및 무리한 동작' },
                    { value: '13', label: '이상온도·물체접촉' },
                    { value: '14', label: '화학물질·누출적촉' },
                    { value: '15', label: '산소결핍' },
                    { value: '16', label: '빠짐·익사' },
                    { value: '17', label: '사업장내 교통사고' },
                    { value: '18', label: '기타' },
                  ]}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row md:gap-0">
          <div className="place-content-center text-[18px] font-semibold leading-[90%] text-[#333] md:h-[44px] md:w-[140px]">
            사고 발생 지역
          </div>
          <div className="flex-1">
            <Controller
              name="accident_areas"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <Input.MultiSelect
                  {...rest}
                  options={[
                    { value: '1', label: '산업' },
                    { value: '2', label: '건설' },
                  ]}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[12px] md:flex-row md:gap-0">
          <div className="place-content-center text-[18px] font-semibold leading-[90%] text-[#333] md:h-[44px] md:w-[140px]">
            기간
          </div>
          <div className="flex-1">
            <div className="md:w-1/2">
              <Controller
                name="date"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <Input.DatePickerRange
                    placeholder="YYYY/MM/DD ~ YYYY/MM/DD"
                    {...rest}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col items-center">
          <div className="w-full md:w-[190px]">
            <button
              type="submit"
              className="h-[61px] w-full rounded-[4px] bg-[#3162fd]"
            >
              <div className="whitespace-nowrap text-center text-[18px] font-bold text-[#fff]">
                상세검색
              </div>
            </button>
          </div>
        </div>
      </section>
    </form>
  )
}
