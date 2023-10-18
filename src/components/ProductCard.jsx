const ProductCard = (props) => {
  const { link, detailPage = false, onProductAdd = () => {}, onProductQuantityChange, quantity, product } = props;

  return (
    <div className="xl:flex xl:flex-row xl:justify-between xl:items-center xl:even:flex-row-reverse xl:space-x-[125px] xl:even:space-x-reverse">
      <div className="bg-lightGrey h-[352px] w-full flex items-center justify-center rounded-[8px] xl:h-[560px] xl:w-[55%]">
        <picture>
          <source media="(max-width: 680px)" srcSet={product.categoryImage.mobile} />
          <source media="(max-width: 1200px)" srcSet={product.categoryImage.tablet} />
          <source media="(min-width: 1201px)" srcSet={product.categoryImage.desktop} />
          <img src={product.categoryImage.mobile} className="h-[350px] w-full object-contain object-center xl:h-full" />
        </picture>
      </div>

      <div className="text-center mt-8 md:mt-[52px] xl:mt-0 xl:text-left xl:w-[45%]">
        <span className={`${product.new ? "block" : "hidden"} tag text-orange mb-6 md:mb-4`}>NEW PRODUCT</span>
        <h2 className="heading3 uppercase mb-6 md:mb-8 md:max-w-[300px] mx-auto xl:ml-0">{product.name}</h2>
        <p className="paragraph text-black/50 mb-[39px] md:max-w-[572px] mx-auto">{product.description}</p>
        <a href={link} className="cta cta-orange text-white">
          SEE PRODUCT
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
