import "swiper/css";
import "swiper/css/effect-cards";
import "./painSolution.css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Angry, Smile } from "lucide-react";

type DataType = {
  pain: string;
  solution: string;
};
const data: DataType[] = [
  {
    pain: "Сделали красивый сайт, а количество продаж/клиентов не увеличилось.",
    solution:
      "В большинстве случаев, после проведения анализа целевой аудитории заказчика, мы начинаем разработку сайтов с мобильного вида и производим кроссплатформенную адаптивную реактивную верстку сайтов, которые прекрасно работают на всех типах как мобильных, так и стационарных устройств",
  },
  {
    pain: "Перестают работать модули и сайт постоянно приходится чинить.",
    solution:
      "Мы ведем разработку с использованием самого современного, стабильного технологического стека, дающего гарантию работоспособности сайта на многие годы вперед.\n" +
      "Мы не используем конструкторы и модульные продукты для создания сайтов, тем самым избегая постоянной и периодической поддержки установленных модулей и шаблонов.",
  },
  {
    pain: "Сделали сайт, а разработчик требует дополнительных выплат за обновление/добавление контента",
    solution:
      "После собеседования с заказчиком, при необходимости, мы используем современную интуитивно-понятную систему управления сайтом, кастомизированную под требования заказчика. Вы сможете сами, без труда изменять наполнение страниц сайта.",
  },
  {
    pain: "Рассчитывал на одну стоимость разработки, а получил в итоге совсем другую",
    solution:
      "Мы всегда разрабатываем индивидуальные UI и дизайн сайта, в зависимости от выявленных нашими аналитиками потребностей заказчика (по согласованию с заказчиком). \n" +
      "Никаких готовых шаблонов и конструкторов сайтов.",
  },
  {
    pain: "Не видим аналитику по сайту",
    solution:
      "Мы подключаем и настраиваем по потребностям заказчика метрику и события на действия пользователей.\n" +
      "При необходимости, мы готовы взять на себя действия по результатам аналитики поведения пользователей, с целью повышения показателей продаж продукта/услуги заказчика",
  },
  {
    pain: "Сделали красивый сайт, но на мобильных устройствах сайт работает плохо",
    solution:
      "Мы делаем не просто красивые сайты, а сайты продающие ваши товары или услуги.\n" +
      "Разработка UI/UX, основанного на психологии пользовательского поведения\n" +
      "Создание уникальных продающих текстовых и аудиовизуальных материалов\n" +
      "Проведение первичной SEO-оптимизации сайта\n" +
      "Digital marketing, как опциональная услуга (Продвижение, таргетирование)",
  },
  {
    pain: "Сколько на самом деле будет стоить сделать сайт?",
    solution:
      "После определения функциональности вашего будущего сайта, вы можете посмотреть живые примеры наших идентичных работ с указанием реальной, а не озвученной - осознанно заниженной, стоимости разработки данных сайтов, и быть уверенным, что для вас, стоимость будет аналогичной",
  },
  {
    pain: "Ничего не понимаю в технологиях и маркетинге, как продавать в интернет",
    solution:
      "Мы готовы оказать полное комплексное омниканальное продвижение вашего товара или услуги, включая разработку сайта, его продвижение в сети, повышение репутации бренда, лиды.. и хз чо",
  },
  {
    pain: "Сайт постоянно требует обновлений, доработок, ремонта",
    solution:
      "Мы производим разработку на собственных наработанных компонентах на основе фреймворка Laravel и CMS Winter/October, что позволяет добиться быстрой полнофункциональной работы сайта на всей продолжительности его жизнедеятельности, в отличие от модульных инструментов создания сайта, которые требуют периодического обновления, покупки или замены, в связи с нестабильностью поддержки текущих разработок на популярных модульных решениях",
  },
  {
    pain: "Сделали сайт интернет-магазина, а оказалось что кроме сайта нужны еще программные продукты для полноценного функционирования магазина, и нет понимания, как выбрать и как интегрировать данные продукты в экосистему",
    solution:
      "Перед началом разработки мы всегда оповещаем заказчика о необходимых интеграциях со сторонними продуктами и стоимости данной интеграции, и в зависимости от потребностей заказчика, предлагаем на выбор:\n" +
      "CRM\n" +
      "ПО складского учета\n" +
      "Модули доставки\n" +
      "Платежные системы\n" +
      "Интеграцию с бухгалтерским ПО",
  },
];

const Card = ({ pain, solution, id }: DataType & { id: number }) => (
  <div>
    <img
      alt={"maskot"}
      src={`images/painSolutions/maskot_${id}.png`}
      className={"h-auto w-full translate-y-[1px] rounded-t-xl bg-white"}
    />
    <div
      className={
        "relative z-20 flex flex-col gap-y-3 rounded-b-xl bg-white p-2"
      }
    >
      <div className={"relative rounded-lg bg-red-500 p-3"}>
        <Angry className={"absolute right-2 top-2"} />
        <span className={"text-xl font-bold"}>Боль</span>
        <p>{pain}</p>
      </div>
      <div className={"relative rounded-lg bg-green-500 p-3"}>
        <Smile className={"absolute right-2 top-2"} />
        <span className={"text-xl font-bold"}>Решение</span>
        <p>{solution}</p>
      </div>
    </div>
  </div>
);
const PainSolutionSlider = () => {
  return (
    <div>
      <div className={"mb-5 block px-6 md:hidden md:px-0"}>
        <Swiper
          className={"pain-solution-swiper"}
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
              <Card id={index} {...props} key={"good_bad-" + index} />
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
              <Card id={index} {...props} key={"good_bad-" + index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PainSolutionSlider;