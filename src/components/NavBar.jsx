import { useState, useContext } from "react";
import logo from "../../public/images/shared/desktop/logo.svg";
import menu from "../../public/images/shared/tablet/icon-hamburger.svg";
import cartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import CategoryCards from "../components/CategoryCards";
import { ModalContext } from "./modalContext";

const NavBar = (props) => {
  const { cart } = props;
  const context = useContext(ModalContext);
  const sumQuantity = cart?.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <header className="z-10 fixed top-0 bg-black w-full py-8 border-b-[1px] border-white/10 md:border-none">
      <div className="mx-auto container px-6 flex flex-row justify-between items-center md:px-10 xl:px-[165px]">
        {/* open/close buttons */}
          <img src={menu} alt="menu" className="cursor-pointer h-[15px] w-full object-contain object-left xl:hidden" onClick={() => context.toggleModal("navbar")} />

        <a href="/" className="w-full">
          <img src={logo} alt="logo" className="object-contain object-center h-[25px] w-full mx-auto xl:object-left" />
        </a>
        <nav>
          {/* mobile, tablet menu */}
          {context.show.navbar ? (
            <div
              className="flex z-10 absolute container px-6 mx-auto bg-white top-[90px] left-0 right-0 font-bold flex-col pt-[84px] pb-8 space-y-[52px] items-center text-center rounded-b-[8px] md:px-10 xl:hidden"
              onClick={() => context.toggleModal("navbar")}
            >
              <CategoryCards />
            </div>
          ) : null}

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
          {context.show.navbar ? <div className="fixed top-[90px] bottom-0 left-0 right-0 bg-black/40 xl:hidden" onClick={() => context.toggleModal("navbar")} /> : null}
        </nav>

        {/* cart */}
        <div className="relative w-full">
          <img src={cartIcon} alt="cart" className="h-5 w-full object-contain object-right cursor-pointer" onClick={() => context.toggleModal("cart")} />
          {cart.length > 0 ? <p className="absolute text-[11px] font-bold text-white top-[-9px] right-0 bg-orange w-4 h-4 text-center rounded-full">{sumQuantity}</p> : null}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
