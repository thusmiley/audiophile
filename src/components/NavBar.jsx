import { useState, useContext } from "react";
import logo from "../../public/images/shared/desktop/logo.svg";
import menu from "../../public/images/shared/tablet/icon-hamburger.svg";
import cartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import CategoryCards from "../components/CategoryCards";
import { ModalContext } from "./modalContext";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const { cart } = props;
  const context = useContext(ModalContext);
  const sumQuantity = cart?.reduce((sum, product) => sum + product.quantity, 0);

  const removeModals = () => {
    context.toggleModal("cart");
    context.toggleModal("confirmation");
    context.toggleModal("navbar");
  };

  return (
    <header className="z-10 fixed top-0 bg-black w-full py-8 border-b-[1px] border-white/10 md:border-none">
      <nav className="mx-auto container px-6 flex flex-row justify-between items-center md:px-10 xl:px-[165px]">
        <img src={menu} alt="menu" className="cursor-pointer h-[15px] w-full object-contain object-left xl:hidden" onClick={() => context.toggleModal("navbar")} />
        <img src={logo} alt="logo" className="object-contain object-center h-[25px] w-full mx-auto xl:object-left" />
        {/* desktop menu */}
        <div className="hidden xl:flex justify-start items-center space-x-[34px] text-white">
          <NavLink to="/" className="menu" onClick={removeModals}>
            HOME
          </NavLink>
          <NavLink
            to="/headphones"
            className="menu"
            onClick={() => {
              context.toggleModal("cart");
              context.toggleModal("confirmation");
              context.toggleModal("navbar");
            }}
          >
            HEADPHONES
          </NavLink>
          <NavLink to="/speakers" className="menu" onClick={removeModals}>
            SPEAKERS
          </NavLink>
          <NavLink to="/earphones" className="menu" onClick={removeModals}>
            EARPHONES
          </NavLink>
        </div>
        {/* cart */}
        <div className="relative w-full">
          <img src={cartIcon} alt="cart" className="h-5 w-full object-contain object-right cursor-pointer" onClick={() => context.toggleModal("cart")} />
          {cart.length > 0 ? <p className="absolute text-[11px] font-bold text-white top-[-7px] right-[-6px] bg-orange w-4 h-4 text-center rounded-full">{sumQuantity}</p> : null}
        </div>
      </nav>

      {/* mobile, tablet menu */}
      {context.show.navbar ? (
        <>
          <div className="fixed top-[90px] bottom-0 left-0 right-0 bg-black/40 xl:hidden" onClick={() => context.toggleModal("navbar")} />
          <nav
            className="flex z-10 absolute container px-6 mx-auto bg-white top-[90px] left-0 right-0 font-bold flex-col pt-[84px] pb-8 space-y-[52px] items-center text-center rounded-b-[8px] md:px-10 xl:hidden"
            onClick={() => context.toggleModal("navbar")}
          >
            <CategoryCards />
          </nav>
        </>
      ) : null}
    </header>
  );
};

export default NavBar;
