import LogoIcon from "@icons/logo.svg?react";
import BurgerIcon from "@icons/burger.svg?react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@components/ui/sheet.tsx";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";
import { routesPaths } from "@providers/router/routesPaths.ts";

const Header = () => {
  const navItems: {
    name: string;
    href: routesPaths | string;
    className?: string;
  }[] = [
    { name: "Наши инструменты", href: "/#instruments" },
    { name: "Кейсы", href: "/#cases" },
    { name: "Ваша боль/наше решение", href: routesPaths.PAIN_SOLUTIONS },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === routesPaths.ROADMAP) {
      setHeaderBg("bg-blue-700");
    }
    if (pathname === routesPaths.TECHNOLOGIES) {
      setHeaderBg("bg-red-500");
    }
    if (pathname === routesPaths.SOLUTIONS) {
      setHeaderBg("bg-amber-400");
    }
  }, [pathname]);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [headerBg, setHeaderBg] = useState<string>("");
  return (
    <header
      className={cn("sticky top-0 z-50 h-16 bg-violet-accent p-2.5", headerBg)}
    >
      <div className={"container flex h-full items-center justify-between"}>
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <ul
          className={
            "hidden items-center justify-center gap-5 text-white lg:flex"
          }
        >
          {navItems.map((item, index) => (
            <li
              className={
                !item.className
                  ? "relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-center before:scale-0 before:bg-white before:opacity-0 before:transition-all hover:before:scale-100 hover:before:opacity-100"
                  : ""
              }
              key={index}
            >
              <HashLink className={item.className} to={item.href}>
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
        <HashLink
          to={"#contact"}
          className={"hidden rounded-lg bg-white px-3 py-2 lg:block"}
        >
          Связаться с нами
        </HashLink>
        <Sheet
          onOpenChange={(state) => setIsSheetOpen(state)}
          open={isSheetOpen}
        >
          <SheetTrigger className={"-m-2 p-2 lg:hidden"}>
            <BurgerIcon />
          </SheetTrigger>
          <SheetContent className={"lg:hidden"}>
            <SheetDescription>
              <ul className={"[&>*:not(:last-child)]:mb-5"}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.href[0] === "#" ? (
                      <HashLink
                        onClick={() => setIsSheetOpen(false)}
                        className={item.className}
                        to={item.href}
                      >
                        {item.name}
                      </HashLink>
                    ) : (
                      <Link
                        onClick={() => setIsSheetOpen(false)}
                        className={item.className}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <HashLink
                to={"#contact"}
                className={
                  "mt-5 block rounded-lg bg-white px-3 py-2 text-black lg:hidden"
                }
              >
                Связаться с нами
              </HashLink>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
