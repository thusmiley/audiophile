import { useState, useContext } from "react";
import check from "../../public/images/checkout/icon-order-confirmation.svg";
import { ModalContext } from "./modalContext";

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
        <div className="fixed top-[89px] bottom-0 left-0 right-0 bg-black/70 z-10" onClick={() => context.toggleModal("confirmation")} />

        <div className="container px-6 mx-auto md:px-10 fixed top-[150px] left-0 right-0 z-10">
          <div className="bg-white rounded-[8px] p-8 md:mx-auto md:p-[48px] md:max-w-[620px]">
            <img src={check} alt="" />
            <h2 className="text-[24px] leading-[28px] tracking-[0.86px] font-bold mt-[23px] mb-4">
              THANK YOU <br />
              FOR YOUR ORDER
            </h2>
            <p className="paragraph text-black/50">You will receive an email confirmation shortly.</p>
            <div className="mt-6 mb-[39px] md:flex md:items-center">
              <div className="bg-lightGrey rounded-t-[8px] p-6 md:rounded-t-[0px] md:w-[55%] md:h-[150px] md:rounded-l-[8px]">
                {cart?.map((product, index) => {
                  return (
                    <div key={index} className="flex items-center justify-between border-b-[1px] border-black/10 pb-3 mb-3">
                      <div className="flex items-center">
                        <img src={product.image.mobile} alt={`${product.name} ${product.category}`} className=" object-cover w-[64px] h-[64px] rounded-[8px] mr-4" />
                        <div>
                          <p className="paragraph font-bold truncate">{product.name}</p>
                          <p className="text-[14px] leading-[25px] font-bold text-black/50">$ {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <p className="paragraph font-bold text-black/50 ml-4">x{product.quantity}</p>
                    </div>
                  );
                })}

                {cart.length > 1 && (
                  <p className="text-[12px] tracking-[-0.21px] text-black/50 text-center" onClick={handleExpand}>
                    {length === 1 ? `and ${cart.length - 1} other item(s)` : "View less"}
                  </p>
                )}
              </div>
              <div className="bg-black rounded-b-[8px] p-6 flex flex-col justify-center md:h-[150px] md:rounded-b-[0px] md:w-[45%] md:rounded-r-[8px] xl:justify-end">
                <p className="paragraph font-bold text-white/50 mb-2">GRAND TOTAL</p>
                <p className="text-[18px] font-bold text-white">$ {(total + shipping).toLocaleString()}</p>
              </div>
            </div>

            <a href="/" className="cta cta-orange block w-full text-white text-center"  onClick={() => {context.toggleModal("confirmation"); onRemoveAll(cart);}} >
              BACK TO HOME
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Confirmation;
