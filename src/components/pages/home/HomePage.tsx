import LogoIcon from "@icons/logo.svg?react";
import HomePageHeroText from "@pages/home/HomePage.HeroText.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui/tabs.tsx";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils.ts";
import { cases } from "./Cases.ts";
import {
  CasesCarouselDesktop,
  CasesCarouselMobile,
} from "@components/CasesCarousel/CasesCarousel.tsx";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";
import "./HomePage.css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "@components/ContactForm/ContactForm.tsx";
import { PainSolutions } from "@pages/home/PainSolutions.ts";
import { BanIcon, CheckIcon } from "lucide-react";
import MainLayout from "@components/layouts/MainLayout.tsx";
import RoadmapBg from "@components/RoadmapBg/RoadmapBg.tsx";
import WhatWeCan from "@pages/home/WhatWeCan.tsx";

import { routesPaths } from "@providers/router/routesPaths.ts";
import { HashLink } from "react-router-hash-link";

const marqueeTexts = [
  { text: "#лендинг" },
  { text: "#корпоративный сайт" },
  { text: "#онлайн-магазины", className: "text-black" },
  { text: "#сайт для фильма" },
  { text: "#киносайт" },
];

const HomePage = () => {
  return (
    <MainLayout className={"bg-violet-accent text-white"}>
      {/*Hero page*/}
      <section className={"container pb-16"}>
        <HomePageHeroText />
        <div className={"relative mx-auto w-fit"}>
          <HashLink
            to={"#contact"}
            className={
              "button relative z-10 mt-10 bg-black py-3 font-normal md:p-6 md:text-xl"
            }
          >
            Хочу сайт!
          </HashLink>
          <LogoIcon
            style={{ animationFillMode: "both" }}
            className={
              "absolute -top-10 left-10 h-auto w-48 -translate-y-1/2 animate-logoStamp fill-none stroke-white stroke-[0.5px] animate-delay-[3s] md:left-[100px] md:top-[-100px] md:w-[400px]"
            }
          />
        </div>
      </section>
      {/* Cases */}
      <div className="anchor-point" id={"cases"} />
      <section className={"bg-zinc-800 pt-10"}>
        <h1
          className={
            "container text-center text-xl font-bold uppercase md:text-4xl"
          }
        >
          Что мы умеем
        </h1>
        <Tabs defaultValue={"site"}>
          <div className={"container w-fit"}>
            <TabsList
              className={
                "py-10 [&>button]:transition-all md:[&>button]:px-5 md:[&>button]:text-xl"
              }
            >
              <TabsTrigger className={"group relative"} value={"site"}>
                Сайт
              </TabsTrigger>
              <TabsTrigger className={"group relative"} value={"app"}>
                Приложение
              </TabsTrigger>
              <TabsTrigger className={"group relative"} value={"bot"}>
                Бот
              </TabsTrigger>
              <TabsTrigger className={"group relative"} value={"seo"}>
                SEO
              </TabsTrigger>
            </TabsList>
          </div>
          <Marquee className={"bg-blue-700 py-5"} autoFill speed={25}>
            {marqueeTexts.map(({ text, className }, i) => (
              <span key={"marquee" + i} className={"flex"}>
                <p
                  className={cn([
                    "font-druk font-bold uppercase md:text-2xl",
                    className,
                  ])}
                >
                  {text}
                </p>
                <div className="inline h-1 w-6 content-['']" />
              </span>
            ))}
          </Marquee>
          <div className={"bg-black"}>
            <div className={"container py-8"}>
              <TabsContent className={"m-0 h-auto"} value={"site"}>
                <CasesCarouselMobile
                  navigation
                  className={"md:hidden"}
                  items={cases.filter((caseItem) => caseItem.type === "site")}
                />
                <CasesCarouselDesktop
                  className={"hidden md:block"}
                  items={cases.filter((caseItem) => caseItem.type === "site")}
                />
              </TabsContent>
              <TabsContent value={"app"}>
                <WhatWeCan
                  title={"Приложение"}
                  description={
                    "Мы создаем инновационные и удобные IOS и Android приложения, учитывая потребности и цели клиентов."
                  }
                  subtitle={
                    "Мы предлагаем разработку приложений «под ключ», включая:"
                  }
                  tasks={[
                    "Разработку идеи и концепции",
                    "Проектирование интерфейса (прототип, пользовательский интерфейс, дизайн и наполнение контентом)",
                    "Разработка бэкэнда: Создание серверной части приложения, включая базу данных, API и логику работы приложения",
                    "Разработка фронтэнда: Реализация клиентской части приложения, включая дизайн, верстку и программирование пользовательского интерфейса",
                    "Тестирование и отладка",
                    "Релиз и запуск (App Store, Google Play)",
                    "Поддержка и обновление",
                  ]}
                  image={"images/app_cover.png"}
                />
              </TabsContent>
              <TabsContent value={"bot"}>
                <WhatWeCan
                  title={"Бот"}
                  description={
                    "Мы создаем Telegram-ботов, которые уникальны для каждого заказчика, включая постоянную техническую поддержку бесперебойной работы. Возможный функционал:"
                  }
                  subTasks={[
                    "Взаимодействие с базой данных (включая интеграцию с искусственным интеллектом)",
                    "Парсинг информации из внешних источников в Telegram-бот",
                  ]}
                  subtitle={"Основные этапы разработки:"}
                  tasks={[
                    "Анализ и планирование функциональности бота",
                    "Создание структуры бота, определение команд и функций, разработка диалоговых сценариев",
                    "Разработка и интеграция: Создание программного кода для бота, интеграция с API Telegram, настройка базы данных и хранение информации",
                    "Тестирование и отладка",
                    "Развитие и поддержка: Добавление новых функций и возможностей, обновление бота в соответствии с требованиями пользователей, поддержка и обслуживание",
                  ]}
                  image={"images/bot_cover.png"}
                />
              </TabsContent>
              <TabsContent value={"seo"}>
                <WhatWeCan
                  title={"SEO"}
                  description={
                    "В стандартное пакетное решение по разработке сайта/лендинга входит первичная SEO-оптимизация. Помимо первичной SEO-оптимизации наша команда предоставляет услуги по комплексным работам по развитию и продвижению, включая оптимизацию посадочных страниц для поисковых систем и проработку коммерческих факторов."
                  }
                  subtitle={"Мы оказываем весь спектр услуг по SEO «под ключ»:"}
                  tasks={[
                    "Исследование рынка и конкурентов, определение наиболее релевантных ключевых слов и фраз",
                    "Создание уникального и информативного контента, оптимизация заголовков, мета-тегов и описаний страниц с использованием ключевых слов",
                    "Проверка и исправление ошибок в коде сайта, улучшение скорости загрузки страниц, оптимизация URL-адресов и структуры сайта",
                    "Привлечение ссылок с других авторитетных сайтов, размещение гостевых постов и участие в отраслевых форумах",
                    "Отслеживание показателей эффективности SEO-оптимизации, анализ трафика и поведения пользователей, внесение корректировок в стратегию",
                    "Постоянное обновление контента, анализ и оптимизация ключевых слов, адаптация к изменениям алгоритмов поисковых систем",
                  ]}
                  image={"images/seo_cover.png"}
                />
              </TabsContent>
            </div>
          </div>
          <Marquee className={"bg-red-500 py-5"} speed={25} autoFill>
            {marqueeTexts.reverse().map(({ text, className }, i) => (
              <span key={"marquee" + i} className={"flex"}>
                <p
                  className={cn([
                    "font-druk font-bold uppercase md:text-2xl",
                    className,
                  ])}
                >
                  {text}
                </p>
                <div className="inline h-1 w-6 content-['']" />
              </span>
            ))}
          </Marquee>
        </Tabs>
      </section>
      {/* RoadmapBg */}
      <section className={"roadmap bg-black py-10"}>
        <div className={"container"}>
          <div
            className={"hide-scrollbar flex flex-row gap-x-3 overflow-x-scroll"}
          >
            <Link
              className={
                "button w-fit whitespace-nowrap border-2 border-blue-700 bg-blue-700"
              }
              to={routesPaths.ROADMAP}
            >
              Дорожная карта
            </Link>
            <Link
              className={
                "button w-fit whitespace-nowrap border-2 border-red-500"
              }
              to={routesPaths.TECHNOLOGIES}
            >
              Про технологии
            </Link>
            <Link
              className={
                "button w-fit whitespace-nowrap border-2 border-amber-400"
              }
              to={routesPaths.SOLUTIONS}
            >
              Пакетные решения
            </Link>
          </div>
          <div className={"mt-10"}>
            <Link to={routesPaths.ROADMAP}>
              <RoadmapBg classname={"w-full h-auto"} />
            </Link>
            <Link
              className={"button mt-10 w-fit bg-purple-500"}
              to={routesPaths.ROADMAP}
            >
              Смотреть все этапы
            </Link>
          </div>
        </div>
      </section>
      <div className="anchor-point" id={"contact"} />
      <section className={"bg-zinc-800 pt-10"}>
        <div className={"container"}>
          <ContactForm />
        </div>
      </section>
      <div className={"anchor-point"} id={"instruments"} />
      <section className={"bg-red-500 py-10"}>
        <div className={"container"}>
          <div className={"flex-row gap-10 md:flex"}>
            <div className={"md:w-2/5"}>
              <h1 className={"text-xl uppercase md:text-3xl"}>
                Какие инструменты используем
              </h1>
              <h2
                className={"mt-5 font-inter text-lg font-medium leading-normal"}
              >
                Кода клиент приходит к нам со своими болями, мы, как заправский
                врач, подбираем наиболее подходящий инструмент для их решений. А
                вот и некоторые примеры!
              </h2>
            </div>

            <Swiper
              className={"pain-slider mt-5 w-full max-w-[400px] md:w-3/5"}
              modules={[EffectCards]}
              rewind
              effect={"cards"}
            >
              {PainSolutions.map(({ pain, solution }) => (
                <SwiperSlide
                  className={"h-min cursor-grab rounded-xl bg-white p-3"}
                >
                  <div className={"grid grid-cols-2 gap-x-2"}>
                    <div
                      className={
                        "bg-transparent md:rounded-xl md:bg-red-600 md:p-2"
                      }
                    >
                      <span
                        className={
                          "mb-2 flex justify-between rounded-xl bg-red-800 p-2 font-extrabold md:bg-transparent"
                        }
                      >
                        Боль
                        <BanIcon />
                      </span>
                      <p
                        className={
                          "text-xs font-medium text-black/40 md:text-white"
                        }
                      >
                        {pain}
                      </p>
                    </div>
                    <div
                      className={
                        "bg-transparent md:rounded-xl md:bg-green-600 md:p-2"
                      }
                    >
                      <span
                        className={
                          "mb-2 flex justify-between rounded-xl bg-red-800 p-2 font-extrabold md:bg-transparent"
                        }
                      >
                        Решение
                        <CheckIcon />
                      </span>
                      <p
                        className={
                          "text-xs font-medium text-black/70 md:font-normal md:text-white"
                        }
                      >
                        {solution}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Link
            className={"button mx-auto mt-10 w-fit bg-purple-500"}
            to={routesPaths.PAIN_SOLUTIONS}
          >
            Библиотека страданий
          </Link>
        </div>
      </section>

      <section className={"clients bg-black py-10 text-white"}>
        <div className={"container"}>
          <h1 className={"mb-5 text-xl uppercase"}>Наши клиенты</h1>
          <div className={"md:hidden"}>
            <div className={"mb-3 flex w-full justify-between gap-3"}>
              <div className={"aspect-square basis-[30%]"}>
                <img src="images/clients/rmg_logo.svg" alt="" />
              </div>
              <div className={"basis-[20%]"}>
                <img src="images/clients/monte_carlo.svg" alt="" />
              </div>
              <div className={"basis-1/2"}>
                <img src="images/clients/hit_logo.svg" alt="" />
              </div>
            </div>
            <div className={"flex gap-x-3"}>
              <div className={"aspect-square basis-2/5"}>
                <img src="images/clients/dfm_logo.svg" alt="" />
              </div>
              <div className={"flex basis-3/5 flex-col gap-y-3"}>
                <div className={"h-full"}>
                  <img src="images/clients/mult_logo.svg" alt="" />
                </div>
                <div className={"h-full"}>
                  <img src="images/clients/station_logo.svg" alt="" />
                </div>
              </div>
            </div>
            <div className={"mt-3 flex flex-row gap-3"}>
              <div className={"basis-2/4"}>
                <img src="images/clients/maximum_logo.svg" alt="" />
              </div>
              <div className={"basis-1/4"}>
                <img src="images/clients/ct_logo.svg" alt="" />
              </div>
              <div className={"flex basis-2/4 flex-col gap-3"}>
                <div>
                  <img src="images/clients/nst_logo.svg" alt="" />
                </div>
                <div>
                  <img src="images/clients/domvet_logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className={"hidden md:block"}>
            <div className={"mb-3 flex w-full justify-between gap-3"}>
              <div className={"aspect-square basis-[30%]"}>
                <img src="images/clients/rmg_logo.svg" alt="" />
              </div>
              <div className={"basis-[20%]"} style={{ paddingInline: "2rem" }}>
                <img src="images/clients/monte_carlo.svg" alt="" />
              </div>
              <div className={"basis-1/2"}>
                <img src="images/clients/hit_logo.svg" alt="" />
              </div>
              <div className={"aspect-square basis-2/5"}>
                <img src="images/clients/dfm_logo.svg" alt="" />
              </div>
            </div>
            <div className={"flex gap-x-3"}>
              <div className={"flex basis-full flex-col gap-y-3"}>
                <div className={"h-full"} style={{ paddingInline: "5rem" }}>
                  <img src="images/clients/mult_logo.svg" alt="" />
                </div>
                <div className={"h-full"} style={{ paddingInline: "3rem" }}>
                  <img src="images/clients/station_logo.svg" alt="" />
                </div>
              </div>
              <div className={"basis-2/4"}>
                <img src="images/clients/maximum_logo.svg" alt="" />
              </div>
              <div className={"basis-1/4"} style={{ paddingInline: "2rem" }}>
                <img src="images/clients/ct_logo.svg" alt="" />
              </div>
              <div className={"flex basis-2/4 flex-col gap-3"}>
                <div className={"h-full"}>
                  <img src="images/clients/nst_logo.svg" alt="" />
                </div>
                <div className={"h-full"}>
                  <img src="images/clients/domvet_logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
