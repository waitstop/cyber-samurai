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
import CasesCarousel from "@components/CasesCarousel/CasesCarousel.tsx";
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
import { animated as a, useSpring } from "@react-spring/web";

const marqueeTexts = [
  { text: "#лендинг" },
  { text: "#корпоративный сайт" },
  { text: "#онлайн-магазины", className: "text-black" },
  { text: "#сайт для фильма" },
  { text: "#киносайт" },
];

const HomePage = () => {
  const [props] = useSpring(
    () => ({
      from: { offset: -1500 },
      to: { offset: 0 },
      config: {
        friction: 80,
      },
    }),
    [],
  );
  return (
    <MainLayout className={"bg-violet-accent text-white"}>
      {/*Hero page*/}
      <section className={"container pb-16"}>
        <HomePageHeroText />
        <div className={"relative mx-auto w-fit"}>
          <a
            href={"#contact"}
            className={"button relative z-10 mt-10 bg-black"}
          >
            Хочу сайт!
          </a>
          <LogoIcon
            style={{ animationFillMode: "both" }}
            className={
              "absolute left-4 top-2 h-auto w-48 -translate-y-1/2 animate-logoStamp fill-none stroke-white stroke-[0.5px] animate-delay-[3s]"
            }
          />
        </div>
      </section>
      {/* Cases */}
      <section className={"bg-zinc-800 pt-10"}>
        <h1 className={"container text-center text-xl font-bold uppercase"}>
          Что мы умеем
        </h1>
        <Tabs defaultValue={"site"}>
          <div className={"container w-fit"}>
            <TabsList className={"py-10"}>
              <TabsTrigger
                disabled={
                  cases.filter((casesItem) => casesItem.type === "site")
                    .length === 0
                }
                className={"group relative"}
                value={"site"}
              >
                Сайт
                <a.svg
                  className={
                    "pointer-events-none absolute -left-6 bottom-4 z-50 hidden w-64 translate-x-1/4 stroke-violet-700 stroke-[5px] group-data-[state=active]:block"
                  }
                  style={{
                    strokeDashoffset: props.offset,
                    strokeDasharray: 2000,
                  }}
                  width="247"
                  height="95"
                  viewBox="0 0 677.53 197.53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m2.5,173.64s107.48,16.17,240-40.17C375.02,77.12,435.02,1.47,527.37,2.51s148.17,64.17,147.65,78.78c-.52,14.61-37.57,33.1-174.26,29.22-128.61-3.65-180.61-26.7-165.39-61.04,23.58-53.22,222.26,5.22,222.26,5.22" />
                  <polyline points="24.5 154.14 2.5 173.64 23.37 195.03" />
                </a.svg>
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
                <svg
                  className={
                    "pointer-events-none absolute -left-4 bottom-0 hidden -translate-y-[40%] translate-x-[10%] group-data-[state=active]:block"
                  }
                  width="230"
                  height="90"
                  viewBox="0 0 397 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M282.31 79.9522C283.913 80.3728 285.553 79.4147 285.973 77.8121C286.394 76.2096 285.436 74.5694 283.833 74.1488L282.31 79.9522ZM68.6996 77.0505L71.4956 78.1377L68.6996 77.0505ZM388.972 94.5683L386.975 96.8073L388.972 94.5683ZM24.9018 159.039C26.3042 159.922 28.1563 159.5 29.0386 158.097L43.4161 135.244C44.2983 133.841 43.8767 131.989 42.4743 131.107C41.0719 130.225 39.2198 130.646 38.3375 132.049L25.5575 152.363L5.24316 139.583C3.84075 138.701 1.98865 139.123 1.10637 140.525C0.2241 141.927 0.645756 143.78 2.04817 144.662L24.9018 159.039ZM283.833 74.1488C256.765 67.0439 207.829 54.4646 163.177 49.9557C140.872 47.7033 119.408 47.438 102.187 50.9871C85.0312 54.523 71.3222 62.0277 65.9035 75.9633L71.4956 78.1377C75.8126 67.0353 86.9973 60.2439 103.398 56.8636C119.735 53.4966 140.49 53.6953 162.574 55.9253C206.699 60.381 255.213 72.8397 282.31 79.9522L283.833 74.1488ZM65.9035 75.9633C64.0181 80.8121 64.0263 85.5238 65.8243 89.9352C67.5871 94.2605 70.9684 98.0535 75.4048 101.388C84.236 108.025 97.9928 113.396 114.612 117.694C147.956 126.319 194.127 130.944 239.269 131.965C284.411 132.986 328.815 130.41 358.643 124.507C373.41 121.584 385.166 117.748 391.51 112.747C394.742 110.199 397.054 106.955 396.991 102.998C396.93 99.132 394.605 95.5726 390.968 92.3292L386.975 96.8073C390.09 99.5856 390.969 101.681 390.992 103.093C391.013 104.413 390.288 106.07 387.796 108.035C382.69 112.06 372.237 115.7 357.478 118.621C328.255 124.404 284.336 126.983 239.405 125.967C194.475 124.95 148.822 120.345 116.114 111.885C99.7065 107.642 86.8796 102.506 79.0096 96.5915C75.0955 93.6497 72.5968 90.655 71.3805 87.6707C70.1993 84.7725 70.1289 81.6526 71.4956 78.1377L65.9035 75.9633ZM390.968 92.3292C280.301 -6.35855 183.285 -14.1516 116.241 15.0823C82.8252 29.6533 57.0366 53.3634 40.9049 79.27C24.8043 105.127 18.1727 133.44 23.5741 157.166L29.4244 155.834C24.4731 134.085 30.464 107.389 45.9982 82.4415C61.5013 57.5444 86.3597 34.6577 118.64 20.5822C182.989 -7.47695 277.562 -0.761709 386.975 96.8073L390.968 92.3292Z"
                    fill="#5D2CE9"
                  />
                </svg>
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
                <svg
                  className={
                    "pointer-events-none absolute -left-4 bottom-0 hidden -translate-y-1/3 translate-x-1/4 group-data-[state=active]:block"
                  }
                  width="247"
                  height="95"
                  viewBox="0 0 247 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M189.973 28.5945C190.507 28.7347 191.054 28.4154 191.194 27.8812C191.335 27.347 191.015 26.8003 190.481 26.66L189.973 28.5945ZM83.7748 27.6273L82.8428 27.2649L83.7748 27.6273ZM242.815 36.3262L242.149 37.0726L242.815 36.3262ZM0.225494 87.3673C-0.123863 87.7951 -0.0603147 88.4251 0.367433 88.7744L7.33798 94.4675C7.76573 94.8169 8.3957 94.7533 8.74506 94.3256C9.09441 93.8978 9.03087 93.2679 8.60312 92.9185L2.40707 87.858L7.46761 81.6619C7.81697 81.2342 7.75342 80.6042 7.32567 80.2549C6.89792 79.9055 6.26795 79.969 5.9186 80.3968L0.225494 87.3673ZM190.481 26.66C177.037 23.1313 152.771 16.8946 130.641 14.6599C119.583 13.5432 108.982 13.4169 100.503 15.1645C92.0452 16.9076 85.4437 20.576 82.8428 27.2649L84.7068 27.9897C86.9405 22.2452 92.7006 18.8145 100.907 17.1233C109.091 15.4365 119.456 15.5406 130.44 16.6497C152.395 18.8667 176.52 25.0633 189.973 28.5945L190.481 26.66ZM82.8428 27.2649C81.9489 29.5638 81.958 31.7736 82.8005 33.8407C83.6313 35.8791 85.2383 37.6975 87.3987 39.3212C91.7057 42.5582 98.4611 45.2059 106.696 47.3359C123.203 51.6053 146.088 53.9004 168.487 54.4071C190.886 54.9137 212.897 53.6341 227.659 50.7125C234.992 49.2615 240.723 47.3727 243.772 44.9688C245.317 43.7511 246.335 42.2699 246.307 40.5199C246.28 38.8005 245.244 37.1525 243.48 35.5799L242.149 37.0726C243.739 38.4902 244.293 39.6503 244.308 40.5517C244.321 41.4225 243.832 42.3748 242.534 43.3982C239.897 45.4765 234.6 47.3001 227.271 48.7506C212.71 51.6323 190.861 52.9127 168.532 52.4076C146.204 51.9025 123.491 49.6141 107.197 45.3997C99.0323 43.2878 92.5868 40.7185 88.6003 37.7224C86.614 36.2295 85.3012 34.6773 84.6526 33.0859C84.0157 31.5232 83.9858 29.844 84.7068 27.9897L82.8428 27.2649ZM243.48 35.5799C216.082 11.1472 194.473 1.27735 175.572 0.610676C156.662 -0.0563298 140.693 8.49972 124.628 20.3435C92.4108 44.0945 59.6052 81.083 0.899634 87.005L1.10037 88.9949C60.5193 83.001 93.9775 45.4243 125.815 21.9533C141.776 10.186 157.283 1.96684 175.502 2.60943C193.729 3.25236 214.904 12.777 242.149 37.0726L243.48 35.5799Z"
                    fill="#5D2CE9"
                  />
                </svg>
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
                <svg
                  className={
                    "pointer-events-none absolute -left-4 bottom-0 hidden -translate-y-1/3 translate-x-1/4 group-data-[state=active]:block"
                  }
                  width="247"
                  height="95"
                  viewBox="0 0 247 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M189.973 28.5945C190.507 28.7347 191.054 28.4154 191.194 27.8812C191.335 27.347 191.015 26.8003 190.481 26.66L189.973 28.5945ZM83.7748 27.6273L82.8428 27.2649L83.7748 27.6273ZM242.815 36.3262L242.149 37.0726L242.815 36.3262ZM0.225494 87.3673C-0.123863 87.7951 -0.0603147 88.4251 0.367433 88.7744L7.33798 94.4675C7.76573 94.8169 8.3957 94.7533 8.74506 94.3256C9.09441 93.8978 9.03087 93.2679 8.60312 92.9185L2.40707 87.858L7.46761 81.6619C7.81697 81.2342 7.75342 80.6042 7.32567 80.2549C6.89792 79.9055 6.26795 79.969 5.9186 80.3968L0.225494 87.3673ZM190.481 26.66C177.037 23.1313 152.771 16.8946 130.641 14.6599C119.583 13.5432 108.982 13.4169 100.503 15.1645C92.0452 16.9076 85.4437 20.576 82.8428 27.2649L84.7068 27.9897C86.9405 22.2452 92.7006 18.8145 100.907 17.1233C109.091 15.4365 119.456 15.5406 130.44 16.6497C152.395 18.8667 176.52 25.0633 189.973 28.5945L190.481 26.66ZM82.8428 27.2649C81.9489 29.5638 81.958 31.7736 82.8005 33.8407C83.6313 35.8791 85.2383 37.6975 87.3987 39.3212C91.7057 42.5582 98.4611 45.2059 106.696 47.3359C123.203 51.6053 146.088 53.9004 168.487 54.4071C190.886 54.9137 212.897 53.6341 227.659 50.7125C234.992 49.2615 240.723 47.3727 243.772 44.9688C245.317 43.7511 246.335 42.2699 246.307 40.5199C246.28 38.8005 245.244 37.1525 243.48 35.5799L242.149 37.0726C243.739 38.4902 244.293 39.6503 244.308 40.5517C244.321 41.4225 243.832 42.3748 242.534 43.3982C239.897 45.4765 234.6 47.3001 227.271 48.7506C212.71 51.6323 190.861 52.9127 168.532 52.4076C146.204 51.9025 123.491 49.6141 107.197 45.3997C99.0323 43.2878 92.5868 40.7185 88.6003 37.7224C86.614 36.2295 85.3012 34.6773 84.6526 33.0859C84.0157 31.5232 83.9858 29.844 84.7068 27.9897L82.8428 27.2649ZM243.48 35.5799C216.082 11.1472 194.473 1.27735 175.572 0.610676C156.662 -0.0563298 140.693 8.49972 124.628 20.3435C92.4108 44.0945 59.6052 81.083 0.899634 87.005L1.10037 88.9949C60.5193 83.001 93.9775 45.4243 125.815 21.9533C141.776 10.186 157.283 1.96684 175.502 2.60943C193.729 3.25236 214.904 12.777 242.149 37.0726L243.48 35.5799Z"
                    fill="#5D2CE9"
                  />
                </svg>
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
                <CasesCarousel
                  navigation
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
      {/* Roadmap */}
      <section className={"roadmap bg-black py-10"}>
        <div className={"container"}>
          <Swiper
            modules={[FreeMode]}
            className={"pr-6"}
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
            <img
              className={"h-auto w-full"}
              src="images/roadmap_bg.png"
              alt="roadmap"
            />
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
          <h1 className={"text-xl uppercase"}>Какие инструменты используем</h1>
          <h2 className={"mt-5 font-inter text-lg font-medium leading-normal"}>
            Кода клиент приходит к нам со своими болями, мы, как заправский
            врач, подбираем наиболее подходящий инструмент для их решений. А вот
            и некоторые примеры!
          </h2>

          <Swiper
            className={"mt-5"}
            modules={[EffectCards]}
            rewind
            effect={"cards"}
          >
            {PainSolutions.map(({ pain, solution }) => (
              <SwiperSlide className={"rounded-xl bg-white p-3"}>
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
    </MainLayout>
  );
};

export default HomePage;
