import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion.tsx";
import React from "react";
import { cn } from "@/lib/utils.ts";

type Props = {
  data: {
    title: string;
    content: string;
    icon: React.ReactNode;
  }[];
  type: "landing" | "site" | "sell";
};
const SolutionAccordion = (props: Props) => {
  return (
    <Accordion
      type={"multiple"}
      className={"h-fit rounded-lg bg-zinc-800 px-5 py-5"}
    >
      <h1 className={"mb-5 text-lg uppercase leading-normal text-white"}>
        {props.type === "landing" && "Лендинг"}
        {props.type === "site" && "Корпоративный сайт"}
        {props.type === "sell" && "Продажа товаров и услуг"}
      </h1>
      {props.data.map(({ title, content, icon }, i) => (
        <AccordionItem
          className={cn("text-white", i !== 0 && "mt-2.5")}
          value={`${props.type}-${i}`}
          key={i + "_" + props.type}
        >
          <AccordionTrigger
            headerClassname={cn(
              "rounded-md p-2",
              props.type === "landing" && "bg-blue-700",
              props.type === "site" && "bg-red-500",
              props.type === "sell" && "bg-amber-400",
            )}
            className={
              "flex flex-row items-center justify-between text-left font-inter text-base font-bold"
            }
          >
            <div className={"flex flex-row items-center justify-start gap-x-2"}>
              {icon}
              <span>{title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className={"p-2 text-zinc-400"}>
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SolutionAccordion;
