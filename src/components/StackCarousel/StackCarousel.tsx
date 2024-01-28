import "./StackCarousel.css"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@components/ui/accordion.tsx";
import punycode from "punycode";
import LinkIcon from "@icons/link.svg?react";
import {useRef, useState} from "react";
import {CaseType} from "@pages/home/Cases.ts";
import ArrowLeftIcon from "@icons/arrow_left.svg?react"
import ArrowRightIcon from "@icons/arrow_right.svg?react"


type Props = {
  items: CaseType[]
}
const StackCarousel = ({items}: Props) => {
  const [accordionState, setAccordionState] = useState<string>("")
  const stackRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    setAccordionState("")
    const card = stackRef.current?.lastElementChild as HTMLDivElement;
    stackRef.current?.prepend(card);
  }

  const prev = () => {
    setAccordionState("")
    const card = stackRef.current?.firstElementChild as HTMLDivElement;
    stackRef.current?.append(card);
  }

  return (
    <div className={"relative"}>
      <ArrowLeftIcon className={"absolute -translate-y-1/2 top-1/2 -left-2 z-[3]"} onClick={next}>next</ArrowLeftIcon>
      <ArrowRightIcon className={"absolute -translate-y-1/2 top-1/2 -right-2 z-[3]"} onClick={prev}>prev</ArrowRightIcon>
      <div className={"stack"} ref={stackRef}>
        {items.map((caseItem, i) => (
          <div className={"card"} key={"caseItem" + i}>
            <div className={"rounded-lg bg-zinc-800 overflow-hidden"}>
              <img className={"w-full h-40 object-cover object-top"} src={new URL(caseItem.img, import.meta.url).href}
                   alt=""/>
              <Accordion value={accordionState} onValueChange={v=> setAccordionState(v)} collapsible type={"single"} className={"p-4 pb-6"} ref={accordionRef}>
                <AccordionItem value={"item-1"}>
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
                    {caseItem.tasks.map(task => (
                      <li
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCarousel;