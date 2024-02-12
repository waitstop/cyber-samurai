import {
  CheckCheck,
  Code2,
  Database,
  FilePenLine,
  MonitorCheck,
  PackageCheck,
  Palette,
  Terminal,
  TextSelect,
  Waypoints,
} from "lucide-react";
import React from "react";

type Data = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

let landingData: Data[] = [
  {
    title: "Первичная информация и маркетинговый анализ",
    content:
      "Мы обсуждаем вами проект и проводим анализ продукта, конкурентов, целевой аудитории, рыночной ниши. Подбираем референсы и разрабатываем техническое задание",
    icon: <FilePenLine />,
  },
  {
    title: "Прототипирование",
    content:
      "Пишем продающие тексты и разрабатываем рациональную навигацию, структуру лендинга.",
    icon: <Waypoints />,
  },
  {
    title: "Дизайн",
    content:
      "Наш креативный департамент разрабатывает уникальный и привлекательный дизайн под ваш проект.",
    icon: <Palette />,
  },
  {
    title: "Вёрстка",
    content:
      "Делаем адаптивную вёрстку под любые экраны (компьютер, смартфон, планшет) и браузеры.",
    icon: <Code2 />,
  },
  {
    title: "Программирование",
    content:
      "Разработка и настройка программных модулей. Перенос на рабочий сервер.",
    icon: <Terminal />,
  },
  {
    title: "Тестирование",
    content: "Тестирование работоспособности лендинга и приёмка клиентом",
    icon: <CheckCheck />,
  },
  {
    title: "Поддержка лендинга",
    content: "Дизайнеры не написали мне текст( или я его не нашел",
    icon: <MonitorCheck />,
  },
];

let siteData: Data[] = [
  {
    title: "Первичная информация и маркетинговый анализ",
    content:
      "Мы обсуждаем вами проект и проводим анализ продукта, конкурентов, целевой аудитории, рыночной ниши. Подбираем референсы и разрабатываем техническое задание",
    icon: <FilePenLine />,
  },
  {
    title: "Прототипирование",
    content:
      "Пишем продающие тексты и разрабатываем рациональную навигацию, структуру лендинга.",
    icon: <Waypoints />,
  },
  {
    title: "Дизайн",
    content:
      "Наш креативный департамент разрабатывает уникальный и привлекательный дизайн под ваш проект.",
    icon: <Palette />,
  },
  {
    title: "Вёрстка",
    content:
      "Делаем адаптивную вёрстку под любые экраны (компьютер, смартфон, планшет) и браузеры.",
    icon: <Code2 />,
  },
  {
    title: "CMS",
    content:
      "Подключаем удобную CMS систему управления сайтом, для комфортного наполнения и редактирования контента",
    icon: <Database />,
  },
  {
    title: "Программирование",
    content:
      "Разработка и настройка программных модулей. Перенос на рабочий сервер.",
    icon: <Terminal />,
  },
  {
    title: "Наполнение контентом",
    content: "SEO оптимизация",
    icon: <TextSelect />,
  },
  {
    title: "Тестирование",
    content: "Тестирование работоспособности лендинга и приёмка клиентом",
    icon: <CheckCheck />,
  },
  {
    title: "Поддержка лендинга",
    content: "Дизайнеры не написали мне текст( или я его не нашел",
    icon: <MonitorCheck />,
  },
];

let sellData: Data[] = [
  {
    title: "Первичная информация и маркетинговый анализ",
    content:
      "Мы обсуждаем вами проект и проводим анализ продукта, конкурентов, целевой аудитории, рыночной ниши. Подбираем референсы и разрабатываем техническое задание",
    icon: <FilePenLine />,
  },
  {
    title: "Прототипирование",
    content:
      "Пишем продающие тексты и разрабатываем рациональную навигацию, структуру лендинга.",
    icon: <Waypoints />,
  },
  {
    title: "Дизайн",
    content:
      "Наш креативный департамент разрабатывает уникальный и привлекательный дизайн под ваш проект.",
    icon: <Palette />,
  },
  {
    title: "Вёрстка",
    content:
      "Делаем адаптивную вёрстку под любые экраны (компьютер, смартфон, планшет) и браузеры.",
    icon: <Code2 />,
  },
  {
    title: "CMS",
    content:
      "Подключаем удобную CMS систему управления сайтом, для комфортного наполнения и редактирования контента",
    icon: <Database />,
  },
  {
    title: "Программирование",
    content:
      "Разработка и настройка программных модулей. Перенос на рабочий сервер.",
    icon: <Terminal />,
  },
  {
    title: "Интеграция сайта с CRM системой",
    content:
      "Платёжными агрегаторами и агрегаторами доставки, модулями складского учёта.",
    icon: <PackageCheck />,
  },
  {
    title: "Наполнение контентом",
    content: "SEO оптимизация",
    icon: <TextSelect />,
  },
  {
    title: "Тестирование",
    content: "Тестирование работоспособности лендинга и приёмка клиентом",
    icon: <CheckCheck />,
  },
  {
    title: "Поддержка сайта",
    content: "Дизайнеры не написали мне текст( или я его не нашел",
    icon: <MonitorCheck />,
  },
];

landingData = landingData.map(({ icon, ...rest }) => {
  const newIcon: React.ReactNode = React.cloneElement(
    icon as React.ReactElement,
    {
      className: "h-5 w-5 shrink-0",
    },
  );
  return { icon: newIcon, ...rest };
});

siteData = siteData.map(({ icon, ...rest }) => {
  const newIcon: React.ReactNode = React.cloneElement(
    icon as React.ReactElement,
    {
      className: "h-5 w-5 shrink-0",
    },
  );
  return { icon: newIcon, ...rest };
});

sellData = sellData.map(({ icon, ...rest }) => {
  const newIcon: React.ReactNode = React.cloneElement(
    icon as React.ReactElement,
    {
      className: "h-5 w-5 shrink-0",
    },
  );
  return { icon: newIcon, ...rest };
});

export { landingData, siteData, sellData };
