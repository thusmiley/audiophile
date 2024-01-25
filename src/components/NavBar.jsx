import { useState, useContext } from "react";
import logo from "../images/shared/desktop/logo.svg";
import menu from "../images/shared/tablet/icon-hamburger.svg";
import cartIcon from "../images/shared/desktop/icon-cart.svg";
import CategoryCards from "../components/CategoryCards";
import { ModalContext } from "./modalContext";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const { cart } = props;
  const context = useContext(ModalContext);
  const sumQuantity = cart?.reduce((sum, product) => sum + product.quantity, 0);
  const pathname = window.location.pathname;

  const removeModals = () => {
    context.toggleOff("cart");
    context.toggleOff("confirmation");
    context.toggleOff("navbar");
  };

  return (
    <header className="z-10 fixed top-0 bg-black w-full py-8 border-b-[1px] border-white/10 md:border-none">
      <nav className="mx-auto w-full px-6 flex flex-row justify-between items-center md:px-10 xl:px-[165px]">
        <img
          src={menu}
          alt="menu"
          className="cursor-pointer h-[15px] w-auto object-contain object-left md:hidden"
          onClick={() => context.toggleModal("navbar")}
        />
        <Link
          to="/"
          className={pathname == "/" ? "text-orange" : ""}
          onClick={removeModals}
        >
          <img
            src={logo}
            alt="logo"
            className="object-contain object-center h-auto w-[143px] mx-auto xl:object-left"
          />
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex justify-start items-center space-x-[34px] text-white">
          <NavLink
            to="/"
            className={`${pathname == "/" ? "text-orange" : ""} menu`}
            onClick={removeModals}
          >
            HOME
          </NavLink>
          <NavLink
            to="/headphones"
            className={`${pathname == "/headphones" ? "text-orange" : ""} menu`}
            onClick={removeModals}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to="/speakers"
            className={`${pathname == "/speakers" ? "text-orange" : ""} menu`}
            onClick={removeModals}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to="/earphones"
            className={`${pathname == "/earphones" ? "text-orange" : ""} menu`}
            onClick={removeModals}
          >
            EARPHONES
          </NavLink>
        </div>
        {/* cart */}
        <div className="relative">
          <img
            src={cartIcon}
            alt="cart"
            className="h-5 w-auto object-contain object-right cursor-pointer"
            onClick={() => context.toggleModal("cart")}
          />
          {cart.length > 0 ? (
            <p className="absolute text-[11px] font-bold text-white top-[-7px] right-[-6px] bg-orange w-4 h-4 text-center rounded-full">
              {sumQuantity}
            </p>
          ) : null}
        </div>
      </nav>

      {/* mobile, tablet menu */}
      {context.show.navbar && (
        <>
          <div
            className="fixed top-[90px] bottom-0 left-0 right-0 bg-black/40 md:hidden"
            onClick={() => context.toggleModal("navbar")}
          />
          <div
            className="z-10 slideup absolute px-6 mx-auto bg-white top-[90px] left-0 right-0 font-bold py-8 items-center text-center rounded-b-[8px] md:px-10 md:hidden"
          >
            <div className="flex flex-col bg-lightGrey space-y-8 rounded-[8px] py-8">
              <NavLink
                to="/"
                className={`${pathname == "/" ? "text-orange" : ""} menu`}
                onClick={() => context.toggleModal("navbar")}
              >
                HOME
              </NavLink>
              <NavLink
                to="/headphones"
                className={`${
                  pathname == "/headphones" ? "text-orange" : ""
                } menu`}
                onClick={() => context.toggleModal("navbar")}
              >
                HEADPHONES
              </NavLink>
              <NavLink
                to="/speakers"
                className={`${
                  pathname == "/speakers" ? "text-orange" : ""
                } menu`}
                onClick={() => context.toggleModal("navbar")}
              >
                SPEAKERS
              </NavLink>
              <NavLink
                to="/earphones"
                className={`${
                  pathname == "/earphones" ? "text-orange" : ""
                } menu`}
                onClick={() => context.toggleModal("navbar")}
              >
                EARPHONES
              </NavLink>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;
