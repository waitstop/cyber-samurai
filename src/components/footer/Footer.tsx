import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className={"container bg-purple-500 py-10 text-white"}>
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
          <a href="https://yandex.ru/maps/-/CDBEISis" target={"_blank"}>
            119270, г. Москва, Лужнецкая набережная, д. 2/4, стр. 15, офис 211
          </a>
        </li>
      </ul>
      <div>
        <a href=""></a>
      </div>
    </footer>
  );
};

export default Footer;
