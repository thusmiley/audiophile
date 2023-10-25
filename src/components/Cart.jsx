import sample from "../../public/images/cart/image-xx59-headphones.jpg";
import { React, useState, useEffect, useContext } from "react";
import QuantityButton from "./QuantityButton";
import { ModalContext } from "./modalContext";

const Cart = (props) => {
  const { cart, removeAll, updateCart } = props;
  const context = useContext(ModalContext);
  const cartNotEmpty = cart.length > 0;
  const total = cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);

  if (context.show.cart) {
    return (
      <>
        {/* overlay */}
        <div className="fixed top-[89px] bottom-0 left-0 right-0 bg-black/40" onClick={() => context.toggleModal("cart")} />
        <div className="absolute top-[114px] left-0 right-0 container px-8 mx-auto sm:flex sm:justify-end md:px-10 xl:px-[165px] z-10">
          <div className="bg-white rounded-[8px] pt-8 pb-[46px] px-7 sm:max-w-[377px]">
            <div className="flex justify-between items-center fadein">
              <h2 className="text-[18px] tracking-[1.29px] font-bold">
                CART (<span>{cart.length}</span>)
              </h2>
              {cartNotEmpty && <p className="pragraph text-black/50 underline decoration-black/50 hover:text-orange hover:decoration-orange cursor-pointer">Remove all</p>}
            </div>

            <div className="my-[31px] space-y-6 fadein">
              {cart.length>0 && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <img src={sample} alt="" className=" object-cover w-[64px] h-[64px] rounded-[8px]" />
                    </div>
                    <div className="ml-4 mr-5 sm:mr-[30px]">
                      <h4 className="paragraph font-bold truncate">XX99 MK II</h4>
                      <p className="text-[14px] leading-[25px] font-bold text-black/50">$ 2,999</p>
                    </div>
                  </div>
                  <QuantityButton>{product.quantity}</QuantityButton>
                </div>
              )}
            </div>

            {cart.length > 0 ? (
              <div className="flex items-center justify-between mb-[39px] fadein">
                <h4 className="paragraph text-black/50">TOTAL</h4>
                <p className="text-[18px] font-bold">$ 5,367</p>
              </div>
            ) : null}

            {cart.length > 0 ?
              <a href="/checkout" className="cta cta-orange text-white block w-full text-center fadein">
                CHECKOUT
              </a> : <p className="paragraph uppercase font-bold text-orange text-center tracking-[1px]">Your cart is empty.</p>}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Cart;
