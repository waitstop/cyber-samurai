import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import TelegramIcon from "@icons/telegram.svg?react";
import LogoIcon from "@icons/logo.svg?react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={"bg-purple-500 py-10 text-white"}>
      <div className={"container"}>
        <h1 className={"mb-5 text-xl uppercase"}>Контакты</h1>
        <ul className={"[&>li]:mb-3"}>
          <li>
            <PhoneIcon className={"mr-3 inline"} />
            <a href="tel:84994901333">+7 499 490-13-33</a>
          </li>
          <li>
            <MailIcon className={"mr-3 inline"} />
            <a href="mailto:info@cybersamurai.ru">info@cybersamurai.ru</a>
          </li>
          <li>
            <MapPinIcon className={"mr-3 inline"} />
            <a href="https://yandex.ru/maps/-/CDBMEW1B" target={"_blank"}>
              119021, г. Москва, Фрунзенская набережная, д. 12
            </a>
          </li>
        </ul>
        <div className={"flex gap-x-3"}>
          <a
            className={
              "flex aspect-square w-12 items-center justify-center rounded-lg bg-blue-400"
            }
            href="https://t.me/Perepolina"
          >
            <TelegramIcon />
          </a>
        </div>

        <Link
          className={"mt-3 block font-medium leading-snug underline opacity-50"}
          to={"/documents/personal-data"}
        >
          Политика в области обработки и защиты персональных данных
        </Link>

        <div
          className={
            "mt-5 flex flex-col items-center justify-center gap-2 opacity-50"
          }
        >
          <span>Задизайнено в Cyber Samurai</span>
          <Link to={"/"}>
            <LogoIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
