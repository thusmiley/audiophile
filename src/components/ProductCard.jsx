import { React, useState, useEffect } from "react";

const ProductCard = (props) => {
  const { link, detailPage = false, onProductAdd = () => {}, onProductQuantityChange, quantity, product } = props;
  const [productQuantity, setProductQuantity] = useState("1");

  return (
    <div
      className={`${
        detailPage ? "md:flex md:justify-between md:items-center md:space-x-[70px]" : ""
      } xl:flex xl:flex-row xl:justify-between xl:items-center xl:even:flex-row-reverse xl:space-x-[125px] xl:even:space-x-reverse`}
    >
      <div className={`${detailPage ? "md:h-[480px] md:w-[45%]" : ""} bg-lightGrey h-[352px] w-full flex items-center justify-center rounded-[8px] xl:h-[560px] xl:w-[55%]`}>
        <picture>
          <source media="(max-width: 680px)" srcSet={product.categoryImage?.mobile} />
          <source media="(max-width: 768px)" srcSet={product.categoryImage?.tablet} />
          <source media="(min-width: 769px)" srcSet={product.categoryImage?.desktop} />
          <img src={product.categoryImage?.mobile} className={`${detailPage ? "md:h-full" : ""} h-[350px] w-full object-contain object-center xl:h-full`} />
        </picture>
      </div>

      <div className={`${detailPage ? "md:mt-0 md:w-[55%]" : "md:mt-[52px]"} mt-8  xl:mt-0 xl:w-[45%]`}>
        <span className={`${product.new ? "block" : "hidden"} tag text-orange mb-6 md:mb-4`}>NEW PRODUCT</span>
        <h2 className={`${detailPage ? "md:ml-0" : ""} heading3 uppercase mb-6 md:mb-8 md:max-w-[300px] mx-auto xl:ml-0`}>{product.name}</h2>
        <p className="paragraph text-black/50 mb-[39px] md:max-w-[572px] mx-auto">{product.description}</p>
        {detailPage && <p className="text-[18px] tracking-[1.29px] font-bold mt-[-15px] mb-[46px]">$ {product?.price?.toLocaleString()}</p>}
        <div className="flex items-center space-x-4">
          {detailPage && (
            <p className="bg-lightGrey w-[120px] h-12 flex justify-center items-center text-[13px] tracking-[1px] font-bold">
              <span className="text-black/25 mr-[21px] cursor-pointer hover:text-orange" onClick={() => setProductQuantity(productQuantity--)}>
                -
              </span>
              {productQuantity}
              <span className="text-black/25 ml-[21px] cursor-pointer hover:text-orange" onClick={() => setProductQuantity(productQuantity++)}>
                +
              </span>
            </p>
          )}
          <a href={link} className="cta cta-orange text-white mx-auto cursor-pointer xl:ml-0">
            {detailPage ? "ADD TO CART" : "SEE PRODUCT"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
