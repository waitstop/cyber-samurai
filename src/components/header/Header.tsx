import LogoIcon from "@icons/logo.svg?react";
import BurgerIcon from "@icons/burger.svg?react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@components/ui/sheet.tsx";

const Header = () => {
  return (
    <header className={"sticky top-0 z-50 bg-violet-accent p-2.5"}>
      <div className={"container flex items-center justify-between"}>
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <Sheet>
          <SheetTrigger>
            <BurgerIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetDescription>
              <ul className={"[&>*:not(:last-child)]:mb-5"}>
                <li>
                  <a href="#">Что мы делаем</a>
                </li>
                <li>
                  <a href="#">Наши инструменты</a>
                </li>
                <li>
                  <a href="#">Кейсы</a>
                </li>
                <li>
                  <a href="#">Ваша боль/наше решение</a>
                </li>
                <li>
                  <a className={"button w-fit bg-white text-zinc-800"} href="#">
                    Связаться с нами
                  </a>
                </li>
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
