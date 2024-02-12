import "swiper/css";
import "swiper/css/effect-cards";
import "./notBitrix.css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BitrixIcon from "@icons/bitrix.svg?react";
import LaravelIcon from "@icons/laravel.svg?react";
import OctoberIcon from "@icons/october.svg?react";
import { Ban, Check } from "lucide-react";

type DataType = {
  title: string;
  bad: string;
  good: string;
};
const data: DataType[] = [
  {
    title: "Ваши бизнес процессы",
    bad: "Прописана своя логика, зачастую её изменение либо невозможно, либо приводит к трудоёмким и длительным переделкам, увеличивая стоимость разработки",
    good: "Возможность полностью кастомизировать прохождение всех бизнес-процессов проходящих внутри сайта, под нужды Заказчика",
  },
  {
    title: "CMS",
    bad: "Имеет довольно жёсткие ограничения, не дающие вносить изменения нужные бизнесу",
    good: "Гибкая система управления сайтом, позволяет реализовать интерфейс под конкретные бизнес-задачи",
  },
  {
    title: "Интеграции",
    bad: "Представляет возможность интеграций из ограниченного списка модулей своего маркетплейса и при условии что ваши бизнес-процессы совпадают по логике с представленными модулями",
    good: "Возможность интеграций с любым сторонним сервисом как при наличии api, так и без него, так как вся бизнес-логика создаётся индивидуально в процессе программирования",
  },
  {
    title: "Скорость загрузки",
    bad: "Производительность в разы скромнее, из-за высокой связанности компонентов и неоптимальной архитектуры Базы Данных",
    good: "Высокая производительность, как следствие быстрая загрузка страниц сайта",
  },
  {
    title: "Хостинг",
    bad: "Битрикс предъявляет избыточные требования, особенно в части CPU, DRAM, HDD/SSD. Для поддержки 1000 позиций магазина придётся оплачивать 10–15 Гбайт пространства",
    good: "Низкие требования к хостингу. Сервер загружен только активными в данный момент процессами, следовательно можно арендовать более простые серверы, стоимость содержания которых на порядок ниже",
  },
  {
    title: "Стабильность работы",
    bad: "Низкая, так как разработчики модулей Битрикс постоянно с определённой периодичностью обновляют/отключают/перестают поддерживать свои компоненты, что вызывает сбои в работе сайтов, вплоть до полного нарушения бизнес-процессов внутри конкретного сайта",
    good: "Высокая, не используются готовые компоненты, нет зависимости от постоянно обновляемых платных модулей, частота обновлений и стабильность работы которых нередко вызывают вопросы",
  },
  {
    title: "Квалификация разработки",
    bad: "Собирать сайты на 1С:Битрикс могут неопытные новички",
    good: "Опытные талантливые разработчики предпочитают работать с фреймворками и отказываются работать с 1С:Битрикс",
  },
  {
    title: "Что выбирают крупняки",
    bad: "ТОП 20 Рунета — 13%. Крупные проекты изначально, либо со временем отказываются от разработки на 1С:Битрикс, что связано с нестабильностью работы сайта, негибкостью к частным бизнес-процессам, трудностью в поддержке",
    good: "ТОП 20 Рунета — Фреймворки 87%. Все крупные проекты, ранее стартовавшие на Битрикс, перешли на фреймворки, в том числе и Laravel (М-Видео, Эльдорадо, Сити-банк и тд)",
  },
  {
    title: "Стабильность работы",
    bad: "Низкая, так как разработчики модулей Битрикс постоянно с определённой периодичностью обновляют/отключают/перестают поддерживать свои компоненты, что вызывает сбои в работе сайтов, вплоть до полного нарушения бизнес-процессов внутри конкретного сайта",
    good: "Высокая, не используются готовые компоненты, нет зависимости от постоянно обновляемых платных модулей, частота обновлений и стабильность работы которых нередко вызывают вопросы",
  },
];

const Card = ({ title, bad, good }: DataType) => (
  <div>
    <h1 className={"w-fit translate-y-[1px] rounded-t-md bg-white p-2"}>
      {title}
    </h1>
    <div
      className={
        "flex gap-3 rounded-b-md rounded-tr-md bg-white  p-2 text-white prose-p:text-xs"
      }
    >
      <div className={"relative basis-1/2 rounded-md bg-red-600 p-2"}>
        <Ban className={"absolute right-2 top-2 h-4 w-4"} />
        <BitrixIcon />
        <h2>1C: Битрикс</h2>
        <p>{bad}</p>
      </div>
      <div className={"relative basis-1/2 rounded-md bg-green-500 p-2"}>
        <Check className={"absolute right-2 top-2 h-4 w-4"} />
        <LaravelIcon className={"mr-1 inline"} />
        <OctoberIcon className={"inline"} />
        <h2>
          Laravel+ <br />
          October CMS
        </h2>
        <p>{good}</p>
      </div>
    </div>
  </div>
);
const NotBitrixSlider = () => {
  return (
    <div>
      <div className={"mb-5 block px-6 md:hidden md:px-0"}>
        <Swiper
          className={"not-bitrix-swiper"}
          modules={[EffectCards]}
          effect={"cards"}
          cardsEffect={{
            slideShadows: false,
          }}
          rewind
          spaceBetween={10}
        >
          {data.map((props, index) => (
            <SwiperSlide>
              <Card {...props} key={"good_bad-" + index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={"hidden md:block"}>
        <Swiper
          grabCursor
          breakpoints={{
            768: {
              slidesPerView: 2.25,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          slidesPerView={3.5}
          spaceBetween={20}
        >
          {data.map((props, index) => (
            <SwiperSlide>
              <Card {...props} key={"good_bad-" + index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NotBitrixSlider;
