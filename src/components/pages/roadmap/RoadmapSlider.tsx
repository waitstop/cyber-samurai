import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, FreeMode } from "swiper/modules";
import Steps from "@pages/roadmap/Steps.ts";

const RoadmapCard = ({
  title,
  image,
  description,
  index,
}: {
  title: string;
  image: string;
  description: string;
  index: number;
}) => (
  <div className={"flex flex-col"}>
    <span
      className={
        "w-fit rounded-t-md bg-white px-2 py-1 font-druk text-xl font-bold"
      }
    >
      Этап {index + 1}
    </span>
    <div className={"overflow-hidden rounded-b-md rounded-tr-md bg-white p-3"}>
      <h1>{title}</h1>
      <p className={"my-2.5"}>{description}</p>
      <img
        className={"h-auto w-full rounded-md object-cover"}
        src={image}
        alt="step_image"
      />
    </div>
  </div>
);

const RoadmapSlider = () => {
  return (
    <>
      <div className={"hidden md:block"}>
        <Swiper
          loop
          grabCursor
          modules={[FreeMode]}
          freeMode
          spaceBetween={24}
          slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {Steps.map((step, index) => (
            <SwiperSlide>
              <RoadmapCard {...step} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={"container md:hidden"}>
        {/*TODO: переделать на вертикальные карточки*/}
        <Swiper
          effect={"cards"}
          className={"steps-swiper"}
          modules={[EffectCards]}
          cardsEffect={{
            rotate: false,
            slideShadows: false,
          }}
        >
          {Steps.map((step, index) => (
            <SwiperSlide key={index + "_slide_step"}>
              <RoadmapCard {...step} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default RoadmapSlider;
