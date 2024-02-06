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
import { EffectCards, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from "@components/ContactForm/ContactForm.tsx";
import { PainSolutions } from "@pages/home/PainSolutions.ts";
import { BanIcon, CheckIcon } from "lucide-react";
import MainLayout from "@components/layouts/MainLayout.tsx";
import RoadmapBg from "@components/RoadmapBg/RoadmapBg.tsx";

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
          <a
            href={"#contact"}
            className={"button relative z-10 mt-10 bg-black lg:text-xl"}
          >
            Хочу сайт!
          </a>
          <LogoIcon
            style={{ animationFillMode: "both" }}
            className={
              "absolute left-4 top-2 h-auto w-48 -translate-y-1/2 animate-logoStamp fill-none stroke-white stroke-[0.5px] animate-delay-[3s] lg:left-[100px] lg:top-[-100px] lg:w-[400px]"
            }
          />
        </div>
      </section>
      {/* Cases */}
      <section className={"bg-zinc-800 pt-10"}>
        <h1
          className={
            "container text-center text-xl font-bold uppercase lg:text-4xl"
          }
        >
          Что мы умеем
        </h1>
        <Tabs defaultValue={"site"}>
          <div className={"container w-fit"}>
            <TabsList
              className={"py-10 lg:[&>button]:px-5 lg:[&>button]:text-xl"}
            >
              <TabsTrigger
                disabled={
                  cases.filter((casesItem) => casesItem.type === "site")
                    .length === 0
                }
                className={"group relative"}
                value={"site"}
              >
                Сайт
              </TabsTrigger>
              <TabsTrigger
                disabled={
                  cases.filter((casesItem) => casesItem.type === "app")
                    .length === 0
                }
                className={"group relative"}
                value={"app"}
              >
                Приложение
              </TabsTrigger>
              <TabsTrigger
                disabled={
                  cases.filter((casesItem) => casesItem.type === "bot")
                    .length === 0
                }
                className={"group relative"}
                value={"bot"}
              >
                Бот
              </TabsTrigger>
              <TabsTrigger
                disabled={
                  cases.filter((casesItem) => casesItem.type === "seo")
                    .length === 0
                }
                className={"group relative"}
                value={"seo"}
              >
                SEO
              </TabsTrigger>
            </TabsList>
          </div>
          <Marquee className={"bg-blue-700 py-5"} speed={25}>
            {marqueeTexts.map(({ text, className }, i) => (
              <span key={"marquee" + i} className={"flex"}>
                <p className={cn(["font-druk font-bold uppercase", className])}>
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
              <TabsContent className={""} value={"app"}>
                123
              </TabsContent>
              <TabsContent className={"container bg-black py-8"} value={"bot"}>
                123
              </TabsContent>
              <TabsContent className={"container bg-black py-8"} value={"seo"}>
                123
              </TabsContent>
            </div>
          </div>
          <Marquee className={"bg-red-500 py-5"} speed={25}>
            {marqueeTexts.reverse().map(({ text, className }, i) => (
              <span key={"marquee" + i} className={"flex"}>
                <p className={cn(["font-druk font-bold uppercase", className])}>
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
          <Swiper
            modules={[FreeMode]}
            className={"pr-6 md:prose-a:text-2xl"}
            spaceBetween={10}
            slidesPerView={"auto"}
            freeMode
          >
            <SwiperSlide className={"w-fit"}>
              <Link
                className={
                  "button w-fit whitespace-nowrap border-2 border-blue-700 bg-blue-700"
                }
                to={"/roadmap"}
              >
                Дорожная карта
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                className={
                  "button w-fit whitespace-nowrap border-2 border-red-500"
                }
                to={"/tech"}
              >
                Про технологии
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                className={
                  "button w-fit whitespace-nowrap border-2 border-amber-400"
                }
                to={"/solutions"}
              >
                Пакетные решения
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className={"mt-10"}>
            <Link to={"/roadmap"}>
              <RoadmapBg classname={"w-full h-auto"} />
            </Link>
            <Link
              className={"button mt-10 w-fit bg-purple-500"}
              to={"/roadmap"}
            >
              Смотреть все этапы
            </Link>
          </div>
        </div>
      </section>
      <section className={"bg-zinc-800 pt-10"} id={"contact"}>
        <div className={"container"}>
          <ContactForm />
        </div>
      </section>
      <section className={"bg-red-500 py-10"}>
        <div className={"container"}>
          <div className={"flex-row gap-10 md:flex"}>
            <div className={"md:w-3/5"}>
              <h1 className={"text-xl uppercase"}>
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
              className={"mt-5 md:w-2/5"}
              modules={[EffectCards]}
              rewind
              effect={"cards"}
            >
              {PainSolutions.map(({ pain, solution }) => (
                <SwiperSlide className={"cursor-grab rounded-xl bg-white p-3"}>
                  <div className={"grid grid-cols-2 gap-x-2"}>
                    <div>
                      <span
                        className={
                          "mb-2 flex justify-between rounded-xl bg-red-800 p-2 font-extrabold"
                        }
                      >
                        Боль
                        <BanIcon />
                      </span>
                      <p className={"text-xs font-medium text-black/40"}>
                        {pain}
                      </p>
                    </div>
                    <div>
                      <span
                        className={
                          "mb-2 flex justify-between rounded-xl bg-green-700 p-2 py-2 font-extrabold"
                        }
                      >
                        Решение
                        <CheckIcon />
                      </span>
                      <p className={"text-xs font-medium text-black/70"}>
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
            to={"/pain-solutions"}
          >
            Библиотека страданий
          </Link>
        </div>
      </section>

      <section className={"clients bg-black py-10 text-white"}>
        <div className={"container"}>
          <h1 className={"mb-5 text-xl uppercase"}>Наши клиенты</h1>
          <div className={"mb-3 flex w-full justify-between gap-3"}>
            <div className={"aspect-square basis-[30%]"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/rmg_logo.svg"
                alt=""
              />
            </div>
            <div className={"basis-[20%]"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/monte_carlo.svg"
                alt=""
              />
            </div>
            <div className={"basis-1/2"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/hit_logo.svg"
                alt=""
              />
            </div>
          </div>

          <div className={"flex gap-x-3"}>
            <div className={"aspect-square basis-2/5"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/dfm_logo.svg"
                alt=""
              />
            </div>
            <div className={"flex basis-3/5 flex-col gap-y-3"}>
              <div className={"h-full"}>
                <img
                  className={"hover:bg-purple-500"}
                  src="images/clients/mult_logo.svg"
                  alt=""
                />
              </div>
              <div className={"h-full"}>
                <img
                  className={"hover:bg-purple-500"}
                  src="images/clients/station_logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className={"mt-3 flex flex-row gap-3"}>
            <div className={"basis-2/4"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/maximum_logo.svg"
                alt=""
              />
            </div>
            <div className={"basis-1/4"}>
              <img
                className={"hover:bg-purple-500"}
                src="images/clients/ct_logo.svg"
                alt=""
              />
            </div>
            <div className={"flex basis-2/4 flex-col gap-3"}>
              <div>
                <img
                  className={"hover:bg-purple-500"}
                  src="images/clients/nst_logo.svg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className={"hover:bg-purple-500"}
                  src="images/clients/domvet_logo.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"overflow-hidden bg-violet-accent"}>
        <Link to={"raffles-app"}>
          <img
            className={"container mx-auto -mb-1 h-auto w-full lg:hidden"}
            src="images/raffles.svg"
            alt="raffles"
          />
          <img
            className={"container mx-auto -mb-1 hidden h-auto w-full lg:block"}
            src="images/raffles_desktop.svg"
            alt="raffles"
          />
        </Link>
      </section>
    </MainLayout>
  );
};

export default HomePage;
