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
  const navItems: { name: string; href: string; className?: string }[] = [
    { name: "Что мы делаем", href: "#" },
    { name: "Наши инструменты", href: "#" },
    { name: "Кейсы", href: "#" },
    { name: "Ваша боль/наше решение", href: "#" },
    {
      name: "Связаться с нами",
      href: "#",
      className: "button w-fit bg-white text-zinc-800",
    },
  ];
  return (
    <header className={"sticky top-0 z-50 bg-violet-accent p-2.5"}>
      <div className={"container flex items-center justify-between"}>
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <ul
          className={
            "hidden items-center justify-center gap-5 text-white lg:flex"
          }
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a className={item.className} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <Sheet>
          <SheetTrigger className={"lg:hidden"}>
            <BurgerIcon />
          </SheetTrigger>
          <SheetContent className={"lg:hidden"}>
            <SheetDescription>
              <ul className={"[&>*:not(:last-child)]:mb-5"}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a className={item.className} href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
