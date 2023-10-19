import sample from "../../public/images/cart/image-xx59-headphones.jpg";

const Cart = () => {
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
            <div className="ml-4 mr-5 sm:mr-[61px]">
              <h4 className="paragraph font-bold">XX99 MK II</h4>
              <p className="text-[14px] leading-[25px] font-bold text-black/50">$ 2,999</p>
            </div>
          </div>

          <p className="bg-lightGrey w-[96px] h-8 flex justify-center items-center text-[13px] tracking-[1px] font-bold ">
            <span className="text-black/25 mr-3 cursor-pointer hover:text-orange">-</span>1<span className="text-black/25 ml-3 cursor-pointer hover:text-orange">+</span>
          </p>
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
};

export default Cart;
