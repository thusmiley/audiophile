const ProductCard = (props) => {
  const { link, detailPage = false, onProductAdd = () => {}, onProductQuantityChange, quantity, product } = props;

  return (
    <div className="xl:flex xl:flex-row xl:justify-between xl:items-center xl:even:flex-row-reverse xl:space-x-[125px] xl:even:space-x-reverse">
      <div className="bg-lightGrey h-[352px] w-full flex items-center justify-center rounded-[8px] xl:h-[560px] xl:w-[55%]">
        <picture>
          <source media="(max-width: 680px)" srcSet={product.categoryImage?.mobile} />
          <source media="(max-width: 1200px)" srcSet={product.categoryImage?.tablet} />
          <source media="(min-width: 1201px)" srcSet={product.categoryImage?.desktop} />
          <img src={product.categoryImage?.mobile} className="h-[350px] w-full object-contain object-center xl:h-full" />
        </picture>
      </div>

      <div className="mt-8 md:mt-[52px] xl:mt-0 xl:w-[45%]">
        <span className={`${product.new ? "block" : "hidden"} tag text-orange mb-6 md:mb-4`}>NEW PRODUCT</span>
        <h2 className="heading3 uppercase mb-6 md:mb-8 md:max-w-[300px] mx-auto xl:ml-0">{product.name}</h2>
        <p className="paragraph text-black/50 mb-[39px] md:max-w-[572px] mx-auto">{product.description}</p>
        {detailPage && <p className="text-[18px] tracking-[1.29px] font-bold mt-[-15px] mb-[46px]">$ {product?.price?.toLocaleString()}</p>}
        <div className="flex items-center space-x-4">
          {detailPage && (
            <p className="bg-lightGrey w-[120px] h-12 flex justify-center items-center text-[13px] tracking-[1px] font-bold">
              <span className="text-black/25 mr-[21px] cursor-pointer hover:text-orange">-</span>
              <span className="text-black/25 ml-[21px] cursor-pointer hover:text-orange">+</span>
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
