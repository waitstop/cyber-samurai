import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion.tsx";
import punycode from "punycode";
import LinkIcon from "@icons/link.svg?react";
import { useEffect, useState } from "react";
import { CaseType } from "@pages/home/Cases.ts";
import ArrowLeftIcon from "@icons/arrow_left.svg?react";
import ArrowRightIcon from "@icons/arrow_right.svg?react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./CasesCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCards, Controller } from "swiper/modules";
import { cn } from "@/lib/utils.ts";
import { Button } from "@components/ui/button.tsx";
import { useSpring, animated as a, useTransition } from "@react-spring/web";

type Props = {
  items: CaseType[];
  navigation?: boolean;
  className?: string;
};
const CasesCarouselMobile = ({
  items,
  navigation = false,
  className,
}: Props) => {
  const [accordionState, setAccordionState] = useState<string>("");
  const [swiperApi, setSwiperApi] = useState<SwiperType | null>(null);

  function next() {
    swiperApi?.slideNext();
  }

  function prev() {
    swiperApi?.slidePrev();
  }

  return (
    <div className={cn(["relative mx-auto w-full max-w-[400px]", className])}>
      {navigation && (
        <>
          <ArrowLeftIcon
            style={{ filter: "drop-shadow(3px 3px 2px rgba(0,0,0,.7))" }}
            className={"absolute -left-2 top-32 z-[3] -translate-y-1/2"}
            onClick={prev}
          >
            next
          </ArrowLeftIcon>
          <ArrowRightIcon
            style={{ filter: "drop-shadow(3px 3px 2px rgba(0,0,0,.7))" }}
            className={"absolute -right-2 top-32 z-[3] -translate-y-1/2"}
            onClick={next}
          >
            prev
          </ArrowRightIcon>
        </>
      )}
      <Swiper
        onSlideChange={() => {
          setAccordionState("");
        }}
        className={"cases-swiper mx-auto w-full"}
        modules={[EffectCards, Controller]}
        controller={{ control: swiperApi }}
        rewind
        onSwiper={(api) => setSwiperApi(api)}
        effect={"cards"}
      >
        {items.map((caseItem, i) => (
          <SwiperSlide key={"caseItem" + i}>
            <div className={"overflow-hidden rounded-lg bg-zinc-800"}>
              <img
                className={"h-40 w-full object-cover object-top"}
                src={caseItem.img}
                alt=""
              />
              <Accordion
                value={accordionState}
                onValueChange={(v) => setAccordionState(v)}
                collapsible
                type={"single"}
                className={"p-4 pb-6"}
              >
                <AccordionItem value={`item-${i}`}>
                  <span>{caseItem.tag}</span>
                  <div className={"flex justify-between"}>
                    <span
                      className={
                        "font-druk font-bold uppercase text-purple-500"
                      }
                    >
                      {caseItem.title}
                    </span>
                    <AccordionTrigger />
                  </div>
                  <AccordionContent className={"mt-4"}>
                    <h2 className={"mb-2"}>Наши задачи</h2>
                    <p>{caseItem.description}</p>
                    <h2 className={"mt-5"}>Что мы сделали</h2>
                    <ul className={"mt-2"}>
                      {caseItem.tasks.map((task, i) => (
                        <li
                          key={"task" + i}
                          className={
                            "flex items-start justify-start gap-x-2 before:mt-1 before:inline-block before:aspect-square before:h-1 before:w-1 before:rounded-full before:bg-purple-500"
                          }
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                    <a
                      className={"button mt-4 w-fit max-w-full bg-purple-500"}
                      href={caseItem.link}
                      target={"_blank"}
                    >
                      <LinkIcon className={"inline"} />
                      <span
                        className={
                          "w-full truncate font-druk text-xs uppercase"
                        }
                      >
                        {punycode.toUnicode(new URL(caseItem.link).host)}
                      </span>
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

const CasesCarouselDesktop = (props: Omit<Props, "navigation">) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState<CaseType>(props.items[0]);
  const [imgProps, imgApi] = useSpring(
    () => ({
      from: {
        backgroundPosition: "50% 0%",
      },
      to: {
        backgroundPosition: "50% 100%",
      },
      config: {
        mass: 3000,
        friction: 200,
        clamp: true,
      },
    }),
    [currentItem, currentItemIndex],
  );
  const transitions = useTransition(currentItem, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  function next() {
    if (currentItemIndex < props.items.length - 1) {
      setCurrentItemIndex((prevState) => prevState + 1);
      imgApi.start({
        from: {
          backgroundPosition: "50% 0%",
        },
        to: {
          backgroundPosition: "50% 100%",
        },
        config: {
          mass: 1,
          friction: 3000,
          clamp: true,
        },
      });
    }
    if (currentItemIndex === props.items.length - 1) {
      setCurrentItemIndex(0);
    }
  }

  useEffect(() => {
    setCurrentItem(props.items[currentItemIndex]);
  }, [currentItemIndex, props.items]);

  return (
    <div className={cn([props.className, "container"])}>
      <div className={"grid grid-cols-2 grid-rows-1 gap-x-5"}>
        <a.div
          style={{ backgroundImage: `url(${currentItem.img})`, ...imgProps }}
          className={"w-full rounded-2xl bg-cover"}
        />
        <div
          className={
            "flex flex-col gap-y-5 prose-h2:text-3xl prose-p:text-blue-200"
          }
        >
          <div className={"h-full rounded-2xl bg-zinc-800 p-10"}>
            {transitions((props, item) => (
              <>
                <a.span style={props}>{currentItem.tag}</a.span>
                <a.h1
                  style={props}
                  className={
                    "mb-2 font-druk text-3xl font-bold uppercase text-purple-500"
                  }
                >
                  {item.title}
                </a.h1>
                <a.h2 style={props} className={"my-2`"}>
                  Наши задачи
                </a.h2>
                <a.p style={props}>{currentItem.description}</a.p>
                <a.h2 style={props} className={"my-2"}>
                  Что мы сделали
                </a.h2>
              </>
            ))}
            {transitions((props) => (
              <a.ul style={props}>
                {currentItem.tasks.map((task, i) => (
                  <li
                    key={currentItem.title + "_task_" + i}
                    className={
                      "flex items-start justify-start gap-x-2 before:mt-2.5 before:block before:aspect-square before:h-1.5 before:w-1.5 before:rounded-full before:bg-purple-500"
                    }
                  >
                    <p>{task}</p>
                  </li>
                ))}
              </a.ul>
            ))}
            {transitions((props) => (
              <a.a
                style={props}
                className={"button mt-4 w-fit bg-purple-500"}
                href={currentItem.link}
                target={"_blank"}
              >
                <LinkIcon className={"inline"} />
                <span className={"truncate font-druk text-xs uppercase"}>
                  {punycode.toUnicode(new URL(currentItem.link).host)}
                </span>
              </a.a>
            ))}
          </div>
          <Button
            onClick={next}
            className={"rounded-2xl py-10 font-druk text-xl uppercase"}
          >
            Следующий кейс
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CasesCarouselMobile, CasesCarouselDesktop };
