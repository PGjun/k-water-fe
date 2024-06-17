import { Icon } from '@/svgs/icons'
import { Img } from '@/svgs/images'
import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({
  closeModal,
  url,
}: {
  closeModal: () => void
  url: string
}) => {
  const handleClose = () => {
    closeModal()
  }

  const [playing, setPlaying] = useState(true)
  const [seekTime, setSeekTime] = useState(0) // 타임라인에서 선택한 시간
  const playerRef = useRef(null)

  const handleProgress = (state: any) => {
    // `playedSeconds`는 비디오의 현재 재생 시간을 초 단위로 제공합니다.
    if (!(playerRef.current as any).seeking) {
      setSeekTime(state.playedSeconds)
    }
  }

  const seekToTime = (time: any) => {
    // 선택된 시간으로 이동합니다.
    ;(playerRef.current as any).seekTo(time)
  }

  return (
    <div className="relative h-full w-full overflow-auto bg-white md:w-[1140px] md:rounded-[20px] md:p-[80px]">
      <button
        type="button"
        onClick={handleClose}
        className="absolute right-7 top-7"
      >
        <Icon.Xmark />
      </button>
      <section className="sticky top-0 bg-white">
        <section className="flex w-full flex-row items-center gap-[12px] border-b border-[#3162FD] bg-white px-[16px] py-[20px] md:hidden md:w-[640px] md:border-0 md:px-0 md:pb-0">
          <div className="relative flex h-[18px] w-full items-center justify-center">
            <button
              onClick={handleClose}
              className="absolute left-0 flex w-[20px] justify-center md:hidden"
            >
              <Icon.NavBack />
            </button>
            <Img.MainLogoM />
          </div>
        </section>
        <section className="flex gap-[20px]">
          <div className="h-[200px] w-full overflow-hidden bg-black md:h-[394px] md:w-[700px] md:rounded-[20px]">
            <ReactPlayer
              height={'100%'}
              url={url}
              width={'100%'}
              controls
              style={{ margin: 0 }}
              ref={playerRef}
              playing={playing}
              onProgress={handleProgress}
            />
          </div>

          <div className="hidden flex-1 rounded-[20px] border border-[#DEE2E6] p-[16px] md:block">
            <div className="font-bold">타임라인</div>
            <div className="flex flex-col">
              <span>
                <button
                  onClick={() => seekToTime(10)}
                  className="text-[#3162FD] underline"
                >
                  00:10
                </button>
              </span>
              <span>
                <button
                  onClick={() => seekToTime(20)}
                  className="text-[#3162FD] underline"
                >
                  00:20
                </button>
              </span>
              <span>
                <button
                  onClick={() => seekToTime(30)}
                  className="text-[#3162FD] underline"
                >
                  00:30
                </button>
              </span>
            </div>
          </div>
        </section>

        <section className="m-[16px] divide-y md:divide-y-0">
          <section className="flex flex-col md:m-0 md:mt-[40px] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-[4px]">
              <div className="text-[20px] font-bold md:text-[28px]">
                작업 중 안전 수칙 10가지
              </div>
              <div className="text-[12px] text-[#666666] md:text-[20px]">
                수자원 공사 | Youtube | 2024-03-01 | 재해 유형 : 전체 | 전체 
              </div>
            </div>

            <div className="mt-[16px] hidden md:mt-0 md:block">
              <button
                type="button"
                className="h-[30px] rounded-[100px] border border-[#666666] px-[16px] text-[12px] font-bold md:h-[58px] md:px-[24px] md:text-[18px]"
              >
                링크 바로가기
              </button>
            </div>
          </section>

          <section className="mt-[20px] flex flex-col gap-[7px] pb-[20px] md:hidden">
            {/* <div className="mt-[20px] font-bold text-[#333333]">타임라인</div> */}
            <div className="mt-[20px] flex gap-[8px]">
              <span className="rounded-[5px] bg-[#3162FD] px-[20px] py-[5px] text-center text-[12px] leading-[12px] text-white">
                안전
              </span>
              <span className="rounded-[5px] bg-[#3162FD] px-[20px] py-[5px] text-center text-[12px] leading-[12px] text-white">
                안전
              </span>
              <span className="rounded-[5px] bg-[#3162FD] px-[20px] py-[5px] text-center text-[12px] leading-[12px] text-white">
                안전
              </span>
            </div>
          </section>
        </section>
      </section>

      <section className="flex flex-col gap-[24px] px-[16px] text-[14px] md:hidden">
        <div className="flex flex-col">
          <span>
            <button
              onClick={() => seekToTime(10)}
              className="text-[#3162FD] underline"
            >
              00:10
            </button>
          </span>
          <span>
            <button
              onClick={() => seekToTime(20)}
              className="text-[#3162FD] underline"
            >
              00:20
            </button>
          </span>
          <span>
            <button
              onClick={() => seekToTime(30)}
              className="text-[#3162FD] underline"
            >
              00:30
            </button>
          </span>
        </div>
      </section>
    </div>
  )
}
