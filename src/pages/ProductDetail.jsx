import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import Prefooter from "../components/Prefooter";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";

const ProductDetail = (props) => {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  const { onProductAdd, onProductQuantityChange, quantity } = props;

  useEffect(() => {
    const currentProduct = category.find((product) => product.name.split(` `).join("-").toLowerCase() === productName);
    setProduct(currentProduct);
  }, [category, productName]);

  return (
    <div className="">
      <div className="h-[90px] bg-black mb-4 md:mb-[33px]" />
      <div className="container px-8 mx-auto md:px-10 xl:px-[165px]">
        <a href="" className="paragraph text-black/50 font-medium hover:text-orange">
          Go Back
        </a>
      </div>

      {/* product main info */}
      <section className="container px-8 mx-auto md:px-10 xl:px-[165px]">
        <div className="mt-6 md:flex md:flex-row">
          <ProductCard product={product} detailPage={true} onProductAdd={onProductAdd} onProductQuantityChange={onProductQuantityChange} quantity={quantity} />
        </div>

        {/* features */}
        <div className="my-[88px]">
          <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold">FEATURES</h2>
          <p className="paragraph text-black/50 mt-6">{product.features}</p>
        </div>

        {/* in the box */}
        <div className="mt-[88px]">
          <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold mb-6">IN THE BOX</h2>
          <div className="space-y-2">
            {product.includes?.map((item, index) => (
              <p key={index} className="paragraph text-black/50">
                <span className="text-orange mr-6 font-bold">{item.quantity}x</span>
                {item.item}
              </p>
            ))}
          </div>
        </div>

        {/* gallery*/}
        <div className="mt-[88px]">
          <picture>
            <source media="(max-width: 680px)" srcSet={product.gallery?.first.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.first.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.first.desktop} />
            <img src={product.gallery?.first.mobile} className="h-[174px] w-full object-cover object-center rounded-[8px] xl:h-full" />
          </picture>

          <picture>
            <source media="(max-width: 680px)" srcSet={product.gallery?.second.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.second.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.second.desktop} />
            <img src={product.gallery?.second.mobile} className="h-[174px] w-full object-cover object-center rounded-[8px] my-5 xl:h-full" />
          </picture>

          <picture>
            <source media="(max-width: 680px)" srcSet={product.gallery?.third.mobile} />
            <source media="(max-width: 1200px)" srcSet={product.gallery?.third.tablet} />
            <source media="(min-width: 1201px)" srcSet={product.gallery?.third.desktop} />
            <img src={product.gallery?.third.mobile} className="h-[368px] w-full object-cover object-center rounded-[8px] xl:h-full" />
          </picture>
        </div>

        {/* you may also like */}
        <div className="mt-[88px]">
          <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold text-center mb-10">YOU MAY ALSO LIKE</h2>
          <div className="space-y-[71px] text-center">
            {product.others?.map((item, index) => (
              <div key={index} className="">
                <div className="rounded-[8px] bg-lightGrey h-[120px]">
                  <picture>
                    <source media="(max-width: 680px)" srcSet={item.image?.mobile} />
                    <source media="(max-width: 1200px)" srcSet={item.image?.tablet} />
                    <source media="(min-width: 1201px)" srcSet={item.image?.desktop} />
                    <img src={item.image?.mobile} className="h-[100px] w-full object-contain object-center  xl:h-full" />
                  </picture>
                </div>

                <h3 className="uppercase text-[24px] tracking-[1.71px] font-bold mt-8 mb-[47px]">{item.name}</h3>

                <a href={`/${product.category}/${item.slug}`} className="cta cta-orange text-white">
                  SEE PRODUCT
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-[172px] container px-8 mx-auto md:px-10 xl:px-[165px]">
        <CategoryCards />
      </div>

      <Prefooter />
    </div>
  );
};

export default ProductDetail;
