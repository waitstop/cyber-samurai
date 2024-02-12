import MainLayout from "@components/layouts/MainLayout.tsx";
import "./solutions.css";
import PersonLoveIcon from "@icons/preson_love.svg?react";
import LayoutIcon from "@icons/layout.svg?react";
import SwapIcon from "@icons/swap.svg?react";
import HandTechIcon from "@icons/hand_tech.svg?react";
import TwentyFourIcon from "@icons/24.svg?react";
import { Button } from "@components/ui/button.tsx";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";
import SolutionAccordion from "@pages/solutions/SolutionAccordion.tsx";
import {
  landingData,
  sellData,
  siteData,
} from "@pages/solutions/SolutionAccordionData.tsx";
import ContactForm from "@components/ContactForm/ContactForm.tsx";

const SolutionsPage = () => {
  const [category, setCategory] = useState<"landing" | "site" | "sell">(
    "landing",
  );
  return (
    <MainLayout className={"bg-amber-400"}>
      <section className={"container pb-10"}>
        <img
          className={
            "h-auto w-full translate-x-8 object-cover md:translate-x-48"
          }
          src="images/solutions/hero_img.svg"
          alt="hero_img"
        />
        <h1
          className={
            "mb-5 text-3xl uppercase text-zinc-800 md:mb-10 md:text-6xl"
          }
        >
          Пакетные
          <br /> решения
        </h1>
        <div className={"grid-solutions"}>
          <div className={"text-rose-500"}>
            <div className={"block flex-row items-center gap-x-2 md:flex"}>
              <PersonLoveIcon />
              <h3>Индивидуальная работа</h3>
            </div>
            <p>с каждым заказчиком</p>
          </div>
          <div className={"text-rose-400"}>
            <div className={"block flex-row items-center gap-x-2 md:flex"}>
              <SwapIcon />
              <h3>Не используем шаблоны</h3>
            </div>
          </div>
          <div className={"text-blue-500"}>
            <div className={"block flex-row items-center gap-x-2 md:flex"}>
              <LayoutIcon />
              <h3>Не работаем с модульными системами и конструкторами</h3>
            </div>
          </div>
          <div className={"text-violet-500"}>
            <div className={"block flex-row items-center gap-x-2 md:flex"}>
              <HandTechIcon />
              <h3>Не работаем с модульными системами и конструкторами</h3>
            </div>
            <p>
              Мы используем передовые технологии и инструменты, чтобы обеспечить
              высокую производительность, безопасность и удобство использования.
            </p>
          </div>
          <div className={"text-rose-500"}>
            <div className={"block flex-row items-center gap-x-2 md:flex"}>
              <TwentyFourIcon />
              <h3>Поддержка и обслуживание</h3>
            </div>
            <p>
              Мы предоставляем полную поддержку и обслуживание после разработки
            </p>
          </div>
        </div>
      </section>
      <section className={"bg-black"}>
        <div
          className={
            "hide-scrollbar container flex gap-3 overflow-scroll py-5 md:hidden"
          }
        >
          <Button
            className={cn(
              "border-2 border-blue-700 bg-transparent text-white",
              category === "landing" ? "bg-blue-700" : "",
            )}
            onClick={() => setCategory("landing")}
          >
            Лендинги
          </Button>
          <Button
            className={cn(
              "border-2 border-red-500 bg-transparent text-white",
              category === "site" ? "bg-red-500" : "",
            )}
            onClick={() => setCategory("site")}
          >
            Корпоративный сайт
          </Button>
          <Button
            className={cn(
              "border-2 border-amber-400 bg-transparent text-white",
              category === "sell" ? "bg-amber-400" : "",
            )}
            onClick={() => setCategory("sell")}
          >
            Продажа товаров и услуг
          </Button>
        </div>
        <div>
          <div className={"container pb-10 md:hidden"}>
            {category === "landing" && (
              <SolutionAccordion type={"landing"} data={landingData} />
            )}
            {category === "site" && (
              <SolutionAccordion type={"site"} data={siteData} />
            )}
            {category === "sell" && (
              <SolutionAccordion type={"sell"} data={sellData} />
            )}
          </div>
          <div className={"container hidden grid-cols-3 gap-x-5 py-10 md:grid"}>
            <SolutionAccordion type={"landing"} data={landingData} />
            <SolutionAccordion type={"site"} data={siteData} />
            <SolutionAccordion type={"sell"} data={sellData} />
          </div>
        </div>
      </section>
      <section className={"bg-zinc-800 pt-10 text-white"}>
        <div className={"container"}>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default SolutionsPage;
