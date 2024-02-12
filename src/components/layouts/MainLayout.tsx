import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";
import React from "react";
import { Link } from "react-router-dom";

import { routesPaths } from "@providers/router/routesPaths.ts";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const MainLayout = ({ className, children }: Props) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <section className={"overflow-hidden bg-violet-accent md:max-h-[200px]"}>
        <Link to={routesPaths.RAFFLE_APP}>
          <img
            className={"container mx-auto -mb-1 h-auto w-full md:hidden"}
            src="images/raffles.svg"
            alt="raffles"
          />
          <img
            className={
              "container mx-auto -mb-1 hidden h-full w-full object-cover md:block"
            }
            src="images/raffles_desktop.svg"
            alt="raffles"
          />
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default MainLayout;
