import { useState, useContext } from "react";
import check from "../../public/images/checkout/icon-order-confirmation.svg";
import sample from "../../public/images/cart/image-xx59-headphones.jpg";

const Confirmation = () => {
  return (
    <div className="bg-white w-full rounded-[8px] p-8 md:p-[48px]">
      <img src={check} alt="" />
      <h2 className="text-[24px] leading-[28px] tracking-[0.86px] font-bold mt-[23px] mb-4">
        THANK YOU <br />
        FOR YOUR ORDER
      </h2>
      <p className="paragraph text-black/50">You will receive an email confirmation shortly.</p>
      <div className="mt-6 mb-[39px] md:flex md:items-center">
        <div className="bg-lightGrey rounded-t-[8px] p-6 md:rounded-t-[0px] md:w-[55%] md:h-[150px] md:rounded-l-[8px]">
          <div className="flex items-center justify-between border-b-[1px] border-black/10 pb-3 mb-3">
            <div className="flex items-center">
              <img src={sample} alt="" className=" object-cover w-[64px] h-[64px] rounded-[8px] mr-4" />
              <div>
                <p className="paragraph font-bold">XX99 MK II</p>
                <p className="text-[14px] leading-[25px] font-bold text-black/50">$ 2,999</p>
              </div>
            </div>
            <p className="paragraph font-bold text-black/50 ml-4">x1</p>
          </div>
          <p className="text-[12px] tracking-[-0.21px] text-black/50 text-center">and 2 other item(s)</p>
        </div>
        <div className="bg-black rounded-b-[8px] p-6 flex flex-col justify-center md:h-[150px] md:rounded-b-[0px] md:w-[45%] md:rounded-r-[8px] xl:justify-end">
          <p className="paragraph font-bold text-white/50 mb-2">GRAND TOTAL</p>
          <p className="text-[18px] font-bold text-white">$ 5,446</p>
        </div>
      </div>

      <a href="/" className="cta cta-orange block w-full text-white text-center">
        BACK TO HOME
      </a>
    </div>
  );
};

export default Confirmation;
