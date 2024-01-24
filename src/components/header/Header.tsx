import LogoIcon from "@icons/logo.svg?react"
import BurgerIcon from "@icons/burger.svg?react"
import {Link} from "react-router-dom";


const Header = () => {
    function handleMenuClick() {
        return
    }

    return (
        <header className={"flex justify-between items-center container pb-2.5 pt-12"}>
            <Link to={"/"}><LogoIcon/></Link>
            <BurgerIcon onClick={handleMenuClick}/>
        </header>
    );
};

export default Header;