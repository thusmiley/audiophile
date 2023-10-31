import { useContext } from "react";
import QuantityButton from "./QuantityButton";
import { ModalContext } from "./modalContext";
import Button from "./Button";

const Cart = (props) => {
  const { cart, onRemoveAll, onUpdateCart } = props;
  const context = useContext(ModalContext);
  const cartNotEmpty = cart.length > 0;
  const total = cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);

  if (context.show.cart) {
    return (
      <>
        {/* overlay */}
        <div className="fixed top-[89px] bottom-0 left-0 right-0 bg-black/70 z-10" onClick={() => context.toggleModal("cart")} />
        
        <div className="fixed top-[114px] left-0 right-0 container px-6 mx-auto sm:flex sm:justify-end md:px-10 xl:px-[165px] z-10">
          <div className="bg-white rounded-[8px] pt-8 pb-[46px] px-7 sm:min-w-[377px]">
            <div className="flex justify-between items-center fadein">
              <h2 className="text-[18px] tracking-[1.29px] font-bold">
                CART (<span>{cart.length}</span>)
              </h2>
              {cartNotEmpty && (
                <p className="pragraph text-black/50 underline decoration-black/50 hover:text-orange hover:decoration-orange cursor-pointer" onClick={() => onRemoveAll(cart)}>
                  Remove all
                </p>
              )}
            </div>

              {cart.map((product, index) => {
                return (
                  <div key={index} className="my-[31px] space-y-6 fadein ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div>
                          <img src={product.image.mobile} alt={`${product.name} ${product.category}`} className="object-cover w-[64px] h-[64px] rounded-[8px]" />
                        </div>
                        <div className="ml-4 mr-5 sm:mr-[30px]">
                          <h4 className="paragraph font-bold truncate max-w-[76px] md:max-w-[95px]">{product.name}</h4>
                          <p className="text-[14px] leading-[25px] font-bold text-black/50">$ {product.price.toLocaleString()}</p>
                        </div>
                      </div>
                      <QuantityButton data-index={index} onQuantityChange={onUpdateCart}>
                        {product.quantity}
                      </QuantityButton>
                    </div>
                  </div>
                );
              })}

            {cart.length > 0 ? (
              <div className="flex items-center justify-between mb-[39px] fadein">
                <h4 className="paragraph text-black/50">TOTAL</h4>
                <p className="text-[18px] font-bold">$ {total.toLocaleString()}</p>
              </div>
            ) : null}

            {cart.length > 0 ? (
              <Button link="/checkout" onClick={() => context.toggleModal("cart")}>
                CHECKOUT
              </Button>
            ) : (
              <p className="paragraph uppercase font-bold text-orange text-center tracking-[1px] mt-[31px] fadein">Your cart is empty.</p>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Cart;
