import codIcon from "../../public/images/checkout/icon-cash-on-delivery.svg";
import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../components/modalContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = (props) => {
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
  };
  const [payment, setPayment] = useState("cc");
  const navigate = useNavigate();
  const context = useContext(ModalContext);
  const { cart } = props;
  const tax = 0.2;
  const shipping = 50;
  const total = cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="pt-[90px] pb-[97px] bg-almostWhite relative">
      <section className="container px-6 mx-auto  mt-4 md:px-10 md:mt-[33px] xl:px-[165px] xl:mt-[79px]">
        <button href="" className="paragraph text-black/50 font-medium hover:text-orange" onClick={() => navigate(-1)}>
          Go Back
        </button>

        <div className="xl:flex xl:items-start xl:justify-between xl:space-x-[30px]">
          {/* checkout */}
          <form action="">
            <div className="mt-6 bg-white pt-6 py-[31px] px-6 rounded-[8px] md:p-8 xl:mt-[56px] xl:py-[54px] xl:px-[48px]">
              <h1 className="text-[28px] tracking-[1px] font-bold md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">CHECKOUT</h1>

              {/* billing details */}
              <div className="">
                <h2 className="menu uppercase text-orange font-bold mt-8 mb-4 md:mt-[41px]">Billing details</h2>

                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                  <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Alexei Ward" required />
                    <p className="errorMsg">Wrong format</p>
                  </div>

                  <div className="form-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="alexei@mail.com" required />
                    <p className="errorMsg">Wrong format</p>
                  </div>

                  <div className="form-input">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="+1 202-555-0136" required />
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
                    <input type="text" name="address" id="address" placeholder="1137 Williams Avenue" required />
                    <p className="errorMsg">Wrong format</p>
                  </div>

                  <div className="form-input">
                    <label htmlFor="zipcode">ZIP Code</label>
                    <input type="number" name="zipcode" id="zipcode" maxlength="5" pattern="[0-9]{5}" placeholder="10001" required />
                    <p className="errorMsg">Wrong format</p>
                  </div>

                  <div className="form-input">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" placeholder="New York" required />
                    <p className="errorMsg">Wrong format</p>
                  </div>

                  <div className="form-input">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" placeholder="United States" required />
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
                        <input type="radio" name="payment" id="creditcard" className="peer/cc" checked onClick={() => setPayment("cc")} />
                        <span className="custom-radio" />
                        <label htmlFor="creditcard">Credit Card</label>
                      </div>

                      <div className="flex justify-start items-center border-[1px] border-[#cfcfcf] rounded-[8px] py-[18px] px-6 hover:border-orange">
                        <input type="radio" name="payment" id="cod" className="peer/cod" onClick={() => setPayment("cod")} />
                        <span className="custom-radio" />
                        <label htmlFor="cod">Cash on Delivery</label>
                      </div>
                    </div>
                  </div>

                  {/* cash on delivery group */}
                  {payment === "cod" && (
                    <div className="flex justify-center items-center">
                      <img src={codIcon} alt="" className="w-[48px] h-[48px] object-contain mr-6" />
                      <p className="paragraph text-black/50">
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that
                        your order will not be cancelled.
                      </p>
                    </div>
                  )}

                  {/* credit card group */}
                  {payment === "cc" && (
                    <div className="space-y-6 md:grid md:grid-cols-5 md:space-y-0 md:gap-x-4">
                      <div className="col-span-2">
                        <label htmlFor="cardnum">Card Number</label>
                        <input type="tel" name="cardnum" id="cardnum" inputMode="numeric" pattern="[0-9\s]{13,19}" maxlength="19" placeholder="0000 0000 0000 0000" required />
                      </div>

                      <div className="col-span-2">
                        <label htmlFor="expirydate">Expiry Date</label>
                        <input type="date" name="expirydate" id="expirydate" required />
                      </div>

                      <div className="col-span-1">
                        <label htmlFor="cvc">CVC</label>
                        <input type="number" name="cvc" id="cvc" placeholder="000" required />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="mt-8 bg-white pt-6 py-[31px] px-6 rounded-[8px] w-full md:p-8 xl:py-[54px] xl:px-[48px] xl:mt-[56px]">
              <h2 className="text-[18px] tracking-[1.29px] font-bold">SUMMARY</h2>

              <div className="mt-[31px] space-y-6">
                {cart.map((product, index) => {
                  return (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src={product.image.mobile} alt={`${product.name} ${product.category}`} className="w-[64px] h-[64px] rounded-[8px] object-cover mr-4" />
                        <div>
                          <p className="paragraph font-bold">{product.name}</p>
                          <p className="text-[14px] leading-[25px] font-bold text-black/50">$ {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="paragraph font-bold text-black/50">x{product.quantity}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 mb-[47px]">
                <div className="flex items-center justify-between mb-2">
                  <p className="paragraph font-medium text-black/50">TOTAL</p>
                  <p className="text-[18px] font-bold">$ {total.toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="paragraph font-medium text-black/50">SHIPPING</p>
                  <p className="text-[18px] font-bold">$ {shipping}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="paragraph font-medium text-black/50">TAXES (INCLUDED)</p>
                  <p className="text-[18px] font-bold">$ {(tax * total).toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="paragraph font-medium text-black/50">GRAND TOTAL</p>
                  <p className="text-[18px] font-bold text-orange">$ {(total + shipping).toLocaleString()}</p>
                </div>
              </div>

              <button className="cta cta-orange text-white block w-full text-center" onClick={() => context.toggleModal("confirmation")}>
                CONTINUE & PAY
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
