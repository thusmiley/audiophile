import { useState, useContext } from "react";
import check from "../../public/images/checkout/icon-order-confirmation.svg";
import { ModalContext } from "./modalContext";
import Button from "./Button";

const Confirmation = (props) => {
  const { cart, onRemoveAll } = props;
  const [expanded, setExpanded] = useState(false);
  const context = useContext(ModalContext);
  const total = cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const shipping = 50;

  const handleExpand = () => {
    setExpanded((prevState) => !prevState);
  };

  let length = expanded ? cart.length : 1;

  if (context.show.confirmation) {
    return (
      <>
        <div className="fixed top-[89px] bottom-0 left-0 right-0 bg-black/70 z-10" />

        <div className="container px-6 mx-auto md:px-10 fixed top-[150px] left-0 right-0 z-10">
          <div className="bg-white rounded-[8px] p-8 md:mx-auto md:p-[48px] md:max-w-[620px]">
            <img src={check} alt="" />
            <h2 className="text-[24px] leading-[28px] tracking-[0.86px] font-bold mt-[23px] mb-4">
              THANK YOU <br />
              FOR YOUR ORDER
            </h2>
            <p className="paragraph text-black/50">You will receive an email confirmation shortly.</p>
            <div className="mt-6 mb-[39px] md:flex md:items-center">
              <div
                className={`flex  items-center justify-between bg-lightGrey rounded-t-[8px] p-6 md:rounded-t-[0px] md:w-[55%] md:rounded-tl-[8px] md:rounded-bl-[8px] ${
                  expanded ? "md:h-[300px]" : "md:h-[156px]"
                } ${cart.length >1 ? 'flex-col' : ''}`}
              >
                {cart?.slice(0, length).map((product, index) => {
                  return (
                    <div key={index} className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-between ">
                        <img src={product.image.mobile} alt={`${product.name} ${product.category}`} className=" object-cover w-[64px] h-[64px] rounded-[8px] mr-4" />
                        <div>
                          <p className="paragraph font-bold max-w-[100px] truncate">{product.name}</p>
                          <p className="text-[14px] leading-[25px] font-bold text-black/50">$ {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="paragraph font-bold text-black/50 ml-4">x{product.quantity}</p>
                    </div>
                  );
                })}

                {cart.length > 1 && (
                  <p
                    className="text-[12px] tracking-[-0.21px] text-black/50 text-center cursor-pointer underline hover:text-orange border-t-[1px] border-black/10 pt-3 mt-3 w-full"
                    onClick={handleExpand}
                  >
                    {length === 1 ? `and ${cart.length - 1} other item(s)` : "View less"}
                  </p>
                )}
              </div>
              <div
                className={`bg-black rounded-b-[8px] p-6 flex flex-col justify-center md:rounded-b-[0px] md:w-[45%] md:rounded-r-[8px]  ${
                  expanded ? "md:h-[300px] md:justify-end" : "md:h-[156px]"
                }`}
              >
                <p className="paragraph font-bold text-white/50 mb-2">GRAND TOTAL</p>
                <p className="text-[18px] font-bold text-white">$ {(total + shipping).toLocaleString()}</p>
              </div>
            </div>

            <Button
              to="/"
              className="cta cta-orange block w-full text-white text-center"
              onClick={() => {
                context.toggleModal("confirmation");
                onRemoveAll(cart);
              }}
            >
              BACK TO HOME
            </Button>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Confirmation;
