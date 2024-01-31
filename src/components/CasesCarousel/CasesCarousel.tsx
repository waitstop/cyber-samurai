import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@components/ui/accordion.tsx";
import punycode from "punycode";
import LinkIcon from "@icons/link.svg?react";
import {useState} from "react";
import {CaseType} from "@pages/home/Cases.ts";
import ArrowLeftIcon from "@icons/arrow_left.svg?react"
import ArrowRightIcon from "@icons/arrow_right.svg?react"
import 'swiper/css';
import 'swiper/css/effect-cards'
import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperType} from "swiper";
import {EffectCards, Controller} from "swiper/modules"


type Props = {
  items: CaseType[],
  navigation?: boolean
}
const CasesCarousel = ({items, navigation = false}: Props) => {
  const [accordionState, setAccordionState] = useState<string>("")
  const [swiperApi, setSwiperApi] = useState<SwiperType | null>(null)

  function next() {
    swiperApi?.slideNext()
  }
  function prev() {
    swiperApi?.slidePrev()
  }

  return (
    <div className={"relative"}>
      {navigation && <>
        <ArrowLeftIcon style={{filter: "drop-shadow(3px 3px 2px rgba(0,0,0,.7))"}}
                       className={"absolute -translate-y-1/2 top-32 -left-2 z-[3]"}
                       onClick={prev}>next</ArrowLeftIcon>
        <ArrowRightIcon style={{filter: "drop-shadow(3px 3px 2px rgba(0,0,0,.7))"}}
                        className={"absolute -translate-y-1/2 top-32 -right-2 z-[3]"}
                        onClick={next}>prev</ArrowRightIcon>
      </>}
      <Swiper
        onSlideChange={() => {
          setAccordionState("")
        }}
        modules={[EffectCards, Controller]}
        controller={{control: swiperApi}}
        rewind
        onSwiper={(api)=>setSwiperApi(api)}
        effect={"cards"}>
        {items.map((caseItem, i) => (
          <SwiperSlide key={"caseItem" + i}>
            <div className={"rounded-lg bg-zinc-800 overflow-hidden"}>
              <img className={"w-full h-40 object-cover object-top"} src={new URL(caseItem.img, import.meta.url).href}
                   alt=""/>
              <Accordion value={accordionState} onValueChange={v => setAccordionState(v)} collapsible type={"single"}
                         className={"p-4 pb-6"}>
                <AccordionItem value={`item-${i}`}>
                  <span>{caseItem.tag}</span>
                  <div className={"flex justify-between"}>
                    <span className={"text-purple-500 uppercase font-bold font-druk"}>{caseItem.title}</span>
                    <AccordionTrigger/>
                  </div>
                  <AccordionContent className={"mt-4"}>
                    <h2 className={"mb-2"}>Наши задачи</h2>
                    <p>{caseItem.description}</p>
                    <h2 className={"mt-5"}>Что мы сделали</h2>
                    <ul className={"mt-2"}>
                      {caseItem.tasks.map((task, i) => (
                        <li
                          key={"task" + i}
                          className={"before:w-1 before:h-1 before:aspect-square before:mt-1 before:bg-purple-500 before:rounded-full before:inline-block flex justify-start items-start gap-x-2"}>
                          {task}
                        </li>
                      ))}
                    </ul>
                    <a className={"button bg-purple-500 w-fit mt-4"} href={caseItem.link} target={"_blank"}>
                      <LinkIcon className={"inline"}/>
                      <span
                        className={"uppercase font-druk text-xs truncate"}>{punycode.toUnicode(new URL(caseItem.link).host)}</span>
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CasesCarousel;