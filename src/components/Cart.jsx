import sample from "../../public/images/cart/image-xx59-headphones.jpg";
import { React, useState, useEffect, useContext } from "react";
import QuantityButton from "./QuantityButton";
import { ModalContext } from "./modalContext";

const Cart = (props) => {
  const { cart, removeAll, updateCart } = props;
  const context = useContext(ModalContext);

  if (context.show.cart) {
    return (
      <div className="bg-white rounded-[8px] pt-8 pb-[46px] px-7 sm:max-w-[377px]">
        <div className="flex justify-between items-center fadein">
          <h2 className="text-[18px] tracking-[1.29px] font-bold">
            CART (<span>3</span>)
          </h2>
          <p className="pragraph text-black/50 underline decoration-black/50 hover:text-orange hover:decoration-orange cursor-pointer">Remove all</p>
        </div>

        <div className="my-[31px] space-y-6 fadein">
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
        </div>

        <div className="flex items-center justify-between mb-[39px] fadein">
          <h4 className="paragraph text-black/50">TOTAL</h4>
          <p className="text-[18px] font-bold">$ 5,396</p>
        </div>

        <a href="/checkout" className="cta cta-orange text-white block w-full text-center fadein">
          CHECKOUT
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default Cart;
