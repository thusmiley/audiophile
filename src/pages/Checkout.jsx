import sample from "../../public/images/cart/image-xx59-headphones.jpg";
import codIcon from "../../public/images/checkout/icon-cash-on-delivery.svg";
import { React, useState, useEffect } from "react";
import Confirmation from "../components/Confirmation";

const Checkout = () => {
  const [confirmation, setConfirmation] = useState(false);

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  return (
    <div className="pt-[90px] pb-[97px] bg-almostWhite relative">
      <section className="container px-8 mx-auto  mt-4  md:px-10 md:mt-[33px] xl:px-[165px] xl:mt-[79px]">
        <a href="" className="paragraph text-black/50 font-medium hover:text-orange">
          Go Back
        </a>

        <div className="xl:flex xl:items-start xl:justify-between xl:space-x-[30px]">
          {/* checkout */}
          <div className="mt-6 bg-white pt-6 py-[31px] px-6 rounded-[8px] md:p-8 xl:mt-[56px] xl:py-[54px] xl:px-[48px]">
            <h1 className="text-[28px] tracking-[1px] font-bold md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">CHECKOUT</h1>

            {/* billing details */}
            <div className="">
              <h2 className="menu uppercase text-orange font-bold mt-8 mb-4 md:mt-[41px]">Billing details</h2>

              <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                <div className="form-input">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Alexei Ward" />
                  <p className="errorMsg">Wrong format</p>
                </div>

                <div className="form-input">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="alexei@mail.com" />
                  <p className="errorMsg">Wrong format</p>
                </div>

                <div className="form-input">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="+1 202-555-0136" />
                  <p className="errorMsg">Wrong format</p>
                </div>
              </div>
            </div>

            {/* shipping info */}
            <div>
              <h2 className="menu uppercase text-orange font-bold mt-8 mb-4 md:mt-[53px]">Shipping info</h2>

              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                <div className="form-input md:col-span-2">
                  <label htmlFor="address">Your Address</label>
                  <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" />
                  <p className="errorMsg">Wrong format</p>
                </div>

                <div className="form-input">
                  <label htmlFor="zipcode">ZIP Code</label>
                  <input type="number" name="zipcode" id="zipcode" placeholder="10001" />
                  <p className="errorMsg">Wrong format</p>
                </div>

                <div className="form-input">
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" id="city" placeholder="New York" />
                  <p className="errorMsg">Wrong format</p>
                </div>

                <div className="form-input">
                  <label htmlFor="country">Country</label>
                  <input type="text" name="country" id="country" placeholder="United States" />
                  <p className="errorMsg">Wrong format</p>
                </div>
              </div>
            </div>

            {/* payment details */}
            <div className="md:mt-[53px]">
              <h2 className="menu uppercase text-orange font-bold mt-8 mb-4">Payment details</h2>

              <div className="space-y-6">
                {/* payment methods group */}
                <div className="md:flex md:justify-between md:items-start">
                  <p className="text-[12px] tracking-[-0.21px] font-bold">Payment Method</p>
                  <div className="mt-[17px] space-y-4 md:mt-0 md:w-1/2">
                    <div className="flex justify-start items-center border-[1px] border-[#cfcfcf] rounded-[8px] py-[18px] px-6 hover:border-orange">
                      <input type="radio" name="creditcard" id="creditcard" checked className="peer/cc" />
                      <label htmlFor="creditcard">Credit Card</label>
                    </div>

                    <div className="flex justify-start items-center border-[1px] border-[#cfcfcf] rounded-[8px] py-[18px] px-6 hover:border-orange">
                      <input type="radio" name="cod" id="cod" className="peer/cod" />
                      <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                  </div>
                </div>

                {/* cash on delivery group */}
                <div className="peer-checked/cod:flex justify-center items-center flex">
                  <img src={codIcon} alt="" className="w-[48px] h-[48px] object-contain mr-6" />
                  <p className="paragraph text-black/50">
                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that
                    your order will not be cancelled.
                  </p>
                </div>

                {/* credit card group */}
                <div className="space-y-6 peer-checked/cc:block md:grid md:grid-cols-5 md:space-y-0 md:gap-x-4">
                  <div className="col-span-2">
                    <label htmlFor="cardnum">Card Number</label>
                    <input type="number" name="cardnum" id="cardnum" placeholder="0000 0000 0000 0000" />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="expirydate">Expiry Date</label>
                    <input type="date" name="expirydate" id="expirydate" />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="cvc">CVC</label>
                    <input type="number" name="cvc" id="cvc" placeholder="000" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* summary */}
          <div className="mt-8 bg-white pt-6 py-[31px] px-6 rounded-[8px] w-full md:p-8 xl:py-[54px] xl:px-[48px] xl:mt-[56px]">
            <h2 className="text-[18px] tracking-[1.29px] font-bold">SUMMARY</h2>

            <div className="mt-[31px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={sample} alt="" className="w-[64px] h-[64px] rounded-[8px] object-cover mr-4" />
                  <div>
                    <p className="paragraph font-bold">XX99 MK II</p>
                    <p className="text-[14px] leading-[25px] font-bold text-black/50">$ 2,999</p>
                  </div>
                </div>
                <p className="paragraph font-bold text-black/50">x1</p>
              </div>
            </div>

            <div className="mt-8 mb-[47px]">
              <div className="flex items-center justify-between mb-2">
                <p className="paragraph font-bold text-black/50">TOTAL</p>
                <p className="text-[18px] font-bold">$ 5,396</p>
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="paragraph font-bold text-black/50">SHIPPING</p>
                <p className="text-[18px] font-bold">$ 50</p>
              </div>
              <div className="flex items-center justify-between mb-6">
                <p className="paragraph font-bold text-black/50">VAT (INCLUDED)</p>
                <p className="text-[18px] font-bold">$ 1,079</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="paragraph font-bold text-black/50">GRAND TOTAL</p>
                <p className="text-[18px] font-bold text-orange">$ 5,446</p>
              </div>
            </div>

            <button className="cta cta-orange text-white block w-full text-center" onclick={handleConfirmation}>
              CONTINUE & PAY
            </button>

            <div className={`${!confirmation ? "hidden" : "block fixed top-[230px] left-0 right-0  z-10 container px-8 mx-auto md:px-10 md:max-w-[620px] xl:top-[150px]"}`}>
              <Confirmation />
            </div>
          </div>
        </div>
      </section>
      {/* overlay */}
      <div className={`${confirmation ? "hidden" : "fixed"} top-0 bottom-0 left-0 right-0 bg-black/40`} onClick={() => setConfirmation(!confirmation)} />
    </div>
  );
};

export default Checkout;
