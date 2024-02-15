import MainLayout from "@components/layouts/MainLayout.tsx";
import RoadmapBg from "@pages/roadmap/RoadmapBg.tsx";
import "./roadmap.css";
import ContactForm from "@components/ContactForm/ContactForm.tsx";
import RoadmapSlider from "@pages/roadmap/RoadmapSlider.tsx";
import { Link } from "react-router-dom";
import { routesPaths } from "@providers/router/routesPaths.ts";

const RoadmapPage = () => {
  return (
    <MainLayout className={"bg-blue-700"}>
      <div className={"h-min overflow-hidden"}>
        <RoadmapBg className={"w-full"} />
      </div>
      <div>
        <h1 className={"container mb-5 text-3xl uppercase text-white"}>
          Дорожная <br />
          карта
        </h1>
        <RoadmapSlider />
      </div>
      <section className={"container pb-10 pt-5"}>
        <h1 className={"druk mb-5 text-xl uppercase text-white"}>
          Смотреть еще
        </h1>
        <div
          className={
            "hide-scrollbar flex items-center justify-start gap-5 overflow-scroll"
          }
        >
          <Link
            className={
              "button w-fit whitespace-nowrap border-2 border-red-500 text-white"
            }
            to={routesPaths.TECHNOLOGIES}
          >
            Про технологии
          </Link>
          <Link
            className={
              "button w-fit whitespace-nowrap border-2 border-amber-300 text-white"
            }
            to={routesPaths.SOLUTIONS}
          >
            Пакетные решения
          </Link>
        </div>
      </section>
      <div className="anchor-point" id={"contact"} />
      <section className={"bg-zinc-800 pt-10 text-white"}>
        <div className={"container"}>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default RoadmapPage;
