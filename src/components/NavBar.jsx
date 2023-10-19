import { useState, useContext } from "react";
import logo from "../../public/images/shared/desktop/logo.svg";
import menu from "../../public/images/shared/tablet/icon-hamburger.svg";
import cart from "../../public/images/shared/desktop/icon-cart.svg";
import CategoryCards from "../components/CategoryCards";
import Cart from "../components/Cart";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    setToggle(!toggle);
    if (show) {
      setShow(!show);
    }
  };

  const handleCartClick = () => {
    setShow(!show);
    if (toggle) {
      setToggle(!toggle);
    }
  };

  return (
    <header className="z-10 fixed top-0 bg-black w-full py-8 border-b-[1px] border-white/10 md:border-none">
      <div className="mx-auto container px-8 flex flex-row justify-between items-center md:px-10 xl:px-[165px]">
        {/* open/close buttons */}
        <img src={menu} alt="menu" onClick={handleMenuClick} className="cursor-pointer h-[15px] w-full object-contain object-left md:w-4 xl:hidden" />

        <a href="/" className="w-full md:ml-[42px] xl:ml-0 xl:mr-10">
          <img src={logo} alt="logo" className="object-contain object-center h-[25px] w-full mx-auto md:object-left md:ml-0" />
        </a>
        <nav>
          {/* mobile, tablet menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } z-10 absolute container px-8 mx-auto bg-white top-[90px] left-0 right-0 font-bold flex-col pt-[84px] pb-8 space-y-[52px] items-center text-center rounded-b-[8px] md:px-10 xl:hidden`}
            onClick={() => setToggle(!toggle)}
          >
            <CategoryCards />
          </div>

          {/* desktop menu */}
          <ul className="hidden xl:flex menu justify-start items-center space-x-[34px] text-white">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/headphones">HEADPHONES</a>
            </li>
            <li>
              <a href="/speakers">SPEAKERS</a>
            </li>
            <li>
              <a href="/earphones">EARPHONES</a>
            </li>
          </ul>

          {/* overlay */}
          <div className={`${!toggle ? "hidden" : "fixed"} top-[90px] bottom-0 left-0 right-0 bg-black/40 xl:hidden`} onClick={() => setToggle(!toggle)} />
        </nav>

        {/* cart */}
        <img src={cart} alt="cart" className="h-5 w-full object-contain object-right cursor-pointer" onClick={handleCartClick} />

        <div className={`${!show ? "hidden" : "block absolute top-[114px] left-0 right-0 container px-8 mx-auto sm:flex sm:justify-end md:px-10 xl:px-[165px]"} z-10`}>
          <Cart />
        </div>
        {/* overlay */}
        <div className={`${!show ? "hidden" : "fixed"} top-[89px] bottom-0 left-0 right-0 bg-black/40`} onClick={() => setShow(!show)} />
      </div>
    </header>
  );
};

export default NavBar;
