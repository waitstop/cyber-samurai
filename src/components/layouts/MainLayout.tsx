import Header from "@components/header/Header.tsx";
import Footer from "@components/footer/Footer.tsx";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};
const MainLayout = ({ className, children }: Props) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
