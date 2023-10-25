import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import Prefooter from "../components/Prefooter";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  const { handleAddToCart, handleQuantityChange, quantity } = props;

  useEffect(() => {
    const currentProduct = category.find((product) => product.name.split(` `).join("-").toLowerCase() === productName);
    setProduct(currentProduct);
  }, [category, productName]);

  const navigate = useNavigate();

  return (
    <div className="pt-[90px]">
      {/* product main info */}
      <section className="container px-8 mx-auto  mt-4 md:px-10 md:mt-[33px] xl:px-[165px] xl:mt-[79px]">
        <button href="" className="paragraph text-black/50 font-medium hover:text-orange" onClick={() => navigate(-1)}>
          Go Back
        </button>
        <div className="mt-6 md:flex md:flex-row xl:mt-[56px]">
          <ProductCard product={product} detailPage={true} handleAddToCart={handleAddToCart} handleQuantityChange={handleQuantityChange} quantity={quantity} />
        </div>

        <div className="xl:flex xl:mt-[160px]">
          {/* features */}
          <div className="my-[88px] md:my-[120px] xl:my-0 xl:w-[60%] xl:mr-[125px]">
            <h2 className="heading5">FEATURES</h2>
            <p className="paragraph text-black/50 mt-6 whitespace-pre-line md:mt-8">{product.features}</p>
          </div>

          {/* in the box */}
          <div className="md:flex md:items-start xl:flex-col xl:w-[40%]">
            <h2 className="heading5 mb-6 md:mr-[150px] md:mb-8 xl:mr-0">IN THE BOX</h2>
            <div className="space-y-2">
              {product.includes?.map((item, index) => (
                <p key={index} className="paragraph text-black/50">
                  <span className="text-orange mr-6 font-bold">{item.quantity}x</span>
                  {item.item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* gallery*/}
        <div className="mt-[88px] md:mt-[120px] md:gallery-grid md:gap-x-[18px] md:gap-y-5 xl:mt-[160px] xl:gap-x-[30px] xl:gap-y-8">
          <picture className="firstImg">
            <source media="(max-width: 680px)" srcSet={product.gallery?.first.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.first.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.first.desktop} />
            <img src={product.gallery?.first.mobile} className="h-[174px] w-full object-cover object-center rounded-[8px] xl:h-full" />
          </picture>

          <picture className="secondImg">
            <source media="(max-width: 680px)" srcSet={product.gallery?.second.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.second.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.second.desktop} />
            <img src={product.gallery?.second.mobile} className="h-[174px] w-full object-cover object-center rounded-[8px] my-5 md:my-0 xl:h-full" />
          </picture>

          <picture className="thirdImg">
            <source media="(max-width: 680px)" srcSet={product.gallery?.third.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.third.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.third.desktop} />
            <img src={product.gallery?.third.mobile} className="h-[368px] w-full object-cover object-center rounded-[8px] xl:h-full" />
          </picture>
        </div>
        {/* you may also like */}
        <div className="mt-[88px] md:mt-[120px] xl:mt-[160px]">
          <h2 className="heading5 text-center mb-10 md:mb-[56px] xl:mb-[64px]">YOU MAY ALSO LIKE</h2>
          <div className="space-y-[71px] text-center md:flex md:justify-between md:items-center md:space-y-0 md:space-x-[11px]">
            {product.others?.map((item, index) => (
              <div key={index} className="md:w-full">
                <div className="rounded-[8px] bg-lightGrey h-[120px] md:h-[318px] ">
                  <picture>
                    <source media="(max-width: 680px)" srcSet={item.image?.mobile} />
                    <source media="(max-width: 1200px)" srcSet={item.image?.tablet} />
                    <source media="(min-width: 1201px)" srcSet={item.image?.desktop} />
                    <img src={item.image?.mobile} className="h-[100px] w-full object-contain object-center md:h-full" />
                  </picture>
                </div>

                <h3 className="uppercase text-[24px] tracking-[1.71px] font-bold mt-8 mb-[47px]">{item.name}</h3>

                <a href={`/${item.category}/${item.slug}`} className="cta cta-orange text-white">
                  SEE PRODUCT
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-[172px] container px-8 mx-auto md:px-10 xl:px-[165px] xl:mt-[240px]">
        <CategoryCards />
      </div>

      <Prefooter />
    </div>
  );
};

export default ProductDetail;
