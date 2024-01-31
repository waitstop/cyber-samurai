import LogoIcon from "@icons/logo.svg?react";
import BurgerIcon from "@icons/burger.svg?react";
import { Link } from "react-router-dom";

const Header = () => {
  function handleMenuClick() {
    return;
  }

  return (
    <header
      className={
        "container flex items-center justify-between bg-violet-accent p-2.5"
      }
    >
      <Link to={"/"}>
        <LogoIcon />
      </Link>
      <BurgerIcon onClick={handleMenuClick} />
    </header>
  );
};

export default Header;
