import codIcon from "../../public/images/checkout/icon-cash-on-delivery.svg";
import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../components/modalContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";

const Checkout = (props) => {
  //   const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  //   const options = {
  //     clientSecret: "{{CLIENT_SECRET}}",
  //   };
  const navigate = useNavigate();
  const context = useContext(ModalContext);
  const { cart } = props;
  const tax = 0.05;
  const shipping = 50;
  const total = cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const [payment, setPayment] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ criteriaMode: "firstError", mode: "onChange", shouldFocusError: true });

  const onSubmit = (data) => {
    console.log(data);
    context.toggleModal("confirmation");
  };

  return (
    <div className="pt-[90px] pb-[97px] bg-almostWhite relative">
      <section className="container px-6 mx-auto  mt-4 md:px-10 md:mt-[33px] xl:px-[165px] xl:mt-[79px]">
        <button href="" className="paragraph text-black/50 font-medium hover:text-orange" onClick={() => navigate(-1)}>
          Go Back
        </button>

          {/* checkout */}
          <form onSubmit={handleSubmit(onSubmit)} className="xl:flex xl:items-start xl:justify-between xl:space-x-[30px]">
            <div className="mt-6 bg-white pt-6 py-[31px] px-6 rounded-[8px] md:p-8 xl:mt-[56px] xl:py-[54px] xl:px-[48px] xl:w-[65%]">
              <h1 className="text-[28px] tracking-[1px] font-bold md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">CHECKOUT</h1>

              {/* billing details */}
              <div className="">
                <h2 className="menu uppercase text-orange font-bold mt-8 mb-4 md:mt-[41px]">Billing details</h2>

                <div className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-4 md:gap-y-6">
                  <div className="form-control">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Alexei Ward"
                      {...register("name", {
                        required: "Required",
                        maxLength: {
                          value: 40,
                          message: "Must be 40 characters or less",
                        },
                      })}
                    />
                    {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                  </div>

                  <div className="form-control">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="alexei@mail.com"
                      {...register("email", {
                        required: "Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                  </div>

                  <div className="form-control">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 202-555-0136"
                      {...register("phone", {
                        required: "Required",
                        pattern: {
                          value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
                  </div>
                </div>
              </div>

              {/* shipping info */}
              <div>
                <h2 className="menu uppercase text-orange font-bold mt-8 mb-4 md:mt-[53px]">Shipping info</h2>

                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-6">
                  <div className="form-control md:col-span-2">
                    <label>Your Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="1137 Williams Avenue"
                      {...register("address", {
                        required: "Required",
                        minLength: {
                          value: 10,
                          message: "Must be 10 characters or more",
                        },
                      })}
                    />
                    {errors.address && <p className="errorMsg">{errors.address.message}</p>}
                  </div>

                  <div className="form-control">
                    <label>ZIP Code</label>
                    <input
                      type="number"
                      name="zipcode"
                      placeholder="10001"
                      {...register("zipcode", {
                        required: "Required",
                        pattern: {
                          value: /^\s*?\d{5}(?:[-\s]\d{4})?\s*?$/,
                          message: "Invalid zipcode",
                        },
                      })}
                    />
                    {errors.zipcode && <p className="errorMsg">{errors.zipcode.message}</p>}
                  </div>

                  <div className="form-control">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="New York"
                      {...register("city", {
                        required: "Required",
                        pattern: {
                          value: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/,
                          message: "Invalid city",
                        },
                      })}
                    />
                    {errors.city && <p className="errorMsg">{errors.city.message}</p>}
                  </div>

                  <div className="form-control">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      placeholder="United States"
                      {...register("country", {
                        required: "Required",
                        pattern: {
                          value: /[a-zA-Z]{2,}/,
                          message: "Invalid country",
                        },
                      })}
                    />
                    {errors.country && <p className="errorMsg">{errors.country.message}</p>}
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
                      <div className="flex justify-start items-center border-[1px] border-[#cfcfcf] rounded-[8px] py-[18px] px-6 hover:border-orange md:ml-2">
                        <input
                          type="radio"
                          value="card"
                          {...register("payment", {
                            required: "Required",
                          })}
                          onChange={() => setPayment("card")}
                        />
                        <label>Credit Card</label>
                      </div>

                      <div className="flex justify-start items-center border-[1px] border-[#cfcfcf] rounded-[8px] py-[18px] px-6 hover:border-orange  md:ml-2">
                        <input type="radio" value="cash" {...register("payment")} onChange={() => setPayment("cash")} />
                        <label>Cash on Delivery</label>
                      </div>
                      {errors.payment && <p className="errorMsg">{errors.payment.message}</p>}
                    </div>
                  </div>

                  {/* cash on delivery group */}
                  {payment === "cash" && (
                    <div className="flex justify-center items-center">
                      <img src={codIcon} alt="" className="w-[48px] h-[48px] object-contain mr-6" />
                      <p className="paragraph text-black/50">
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that
                        your order will not be cancelled.
                      </p>
                    </div>
                  )}

                  {/* credit card group */}
                  {payment === "card" && (
                    <div className="space-y-6 md:flex md:space-y-0 md:space-x-4">
                      <div className="md:w-1/2">
                        <label>Card Number</label>
                        <input
                          type="number"
                          name="cardnum"
                          placeholder="0000 0000 0000 0000"
                          {...register("cardnum", {
                            required: "Required",
                            pattern: {
                              value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$|^(?:5[1-5][0-9]{14})$|^(?:3[47][0-9]{13})$|^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
                              message: "Invalid card number",
                            },
                          })}
                        />
                        {errors.cardnum && <p className="errorMsg">{errors.cardnum.message}</p>}
                      </div>

                      <div className="flex items-end space-x-4 md:w-1/2 xl:space-x-2 2xl:space-x-4">
                        <div className="w-[65%]">
                          <label>Expiry Date (MM/YY)</label>
                          <div className="flex space-x-4 xl:space-x-2 2xl:space-x-4">
                            <input
                              type="number"
                              name="expirymonth"
                              placeholder="MM"
                              {...register("expirymonth", {
                                required: "Required",
                                pattern: {
                                  value: /^01|02|03|04|05|06|07|08|09|10|11|12$/,
                                  message: "Invalid",
                                },
                              })}
                            />
                            {errors.expirymonth && <p className="errorMsg">{errors.expirymonth.message}</p>}
                            <input
                              type="number"
                              name="expiryyear"
                              placeholder="YY"
                              {...register("expiryyear", {
                                required: "Required",
                                pattern: {
                                  value: /^(2[3-9])$/,
                                  message: "Invalid",
                                },
                              })}
                            />
                            {errors.expiryyear && <p className="errorMsg">{errors.expiryyear.message}</p>}
                          </div>
                        </div>

                        <div className="w-[35%]">
                          <label>CVC</label>
                          <input
                            type="number"
                            name="cvc"
                            placeholder="000"
                            {...register("cvc", {
                              required: "Required",
                              pattern: {
                                value: /^[0-9]{3,4}$/,
                                message: "Invalid",
                              },
                            })}
                          />
                          {errors.cvc && <p className="errorMsg">{errors.cvc.message}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* summary */}
            <div className="mt-8 bg-white pt-6 py-[31px] px-6 rounded-[8px] w-full md:p-8  xl:py-[54px] xl:px-[48px] xl:mt-[56px] xl:w-[35%]">
              <h2 className="text-[18px] tracking-[1.29px] font-bold">SUMMARY</h2>

              <div className="mt-[31px] space-y-6">
                {cart.map((product, index) => {
                  return (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img src={product.image.mobile} alt={`${product.name} ${product.category}`} className="w-[64px] h-[64px] rounded-[8px] object-cover mr-4" />
                        <div>
                          <p className="paragraph font-bold truncate max-w-[120px] md:max-w-full xl:max-w-[100px] 2xl:max-w-full">{product.name}</p>
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

              <button type="submit" className="cta cta-orange text-white block w-full text-center">
                CONTINUE & PAY
              </button>
            </div>
          </form>
      </section>
    </div>
  );
};

export default Checkout;
