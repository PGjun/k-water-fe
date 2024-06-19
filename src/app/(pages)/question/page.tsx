import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Icon } from '@/svgs/icons'

export default function QuestionPage() {
  return (
    <div className="flex justify-center md:mt-[76px]">
      <div className="min-h-screen w-full flex-1 md:mx-[16px] md:max-w-[1200px]">
        <section>
          <section className="flex items-center gap-[12px] px-[16px] md:items-end md:justify-between md:px-0">
            <div className="md:hidden">
              <Icon.NavBack />
            </div>
            <h1 className="py-[20px] text-[20px] font-bold leading-[20px] md:text-[26px]">
              자주하는 질문
            </h1>
          </section>

          <section className="border-t border-[#666666]">
            <Accordion
              type="single"
              defaultValue="item-0"
              collapsible
              className="w-full"
            >
              {Array.from({ length: 10 }).map((_, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="flex flex-col md:flex-row [&[data-state=open]>section]:shadow-md md:[&[data-state=open]>span]:text-[#3162FD]"
                >
                  <section className="flex-1 px-[20px] md:px-[40px]">
                    <AccordionTrigger tag={'영상 관련'}>
                      계정 관련 질문 입니다.계정 관련 질문 입니다.계정 관련 질문
                      입니다.계정 관련 질문 입니다.
                    </AccordionTrigger>
                    <div className="md:pl-[136px]">
                      <AccordionContent>
                        계정 관련 질문에 대한 답변 입니다. 계정 관련 질문에 대한
                        답변 입니다. 내부 스크롤 없이 답변의 길이만큼 세로
                        영역이 확장 됩니다. 최대 가로 너비를 알리기 위한 임의의
                        문구 작성 입니다. 최대 가로 너비를 알리기 위한 임의의
                        문구 작성 입니다.
                      </AccordionContent>
                    </div>
                  </section>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </section>
      </div>
    </div>
  )
}
