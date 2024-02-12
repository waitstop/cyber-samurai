import MainLayout from "@components/layouts/MainLayout.tsx";
import { HashLink } from "react-router-hash-link";
import { routesPaths } from "@providers/router/routesPaths.ts";
import PainSolutionSlider from "@pages/painSolution/PainSolutionSlider.tsx";
import ContactForm from "@components/ContactForm/ContactForm.tsx";

const PainSolutionPage = () => {
  return (
    <MainLayout className={"bg-violet-accent text-white"}>
      <h1 className={"container text-3xl uppercase md:py-10 md:text-6xl"}>
        Библиотека <br />
        страданий
      </h1>
      <section
        className={
          "hide-scrollbar container flex gap-x-3 overflow-x-scroll py-5 md:hidden"
        }
      >
        <HashLink
          className={"whitespace-nowrap rounded-lg border-2 px-2 py-1"}
          to={"/#cases"}
        >
          Лендинги
        </HashLink>
        <HashLink
          className={
            "whitespace-nowrap rounded-lg border-2 border-red-500 px-2 py-1"
          }
          to={routesPaths.TECHNOLOGIES}
        >
          Про технологии
        </HashLink>
        <HashLink
          className={
            "whitespace-nowrap rounded-lg border-2 border-amber-400 px-2 py-1"
          }
          to={routesPaths.SOLUTIONS}
        >
          Пакетные решения
        </HashLink>
      </section>
      <section className={"overflow-hidden"}>
        <PainSolutionSlider />
      </section>
      <div className="anchor-point" id={"contact"} />
      <section className={"bg-zinc-800 text-white"}>
        <div className={"container pt-10"}>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default PainSolutionPage;
