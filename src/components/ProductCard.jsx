const ProductCard = (props) => {
  const { link, product } = props;

  return (
    <div>
      <picture>
        <source media="(max-width: 680px)" srcSet={product.image?.productMobile} />
        <source media="(max-width: 1200px)" srcSet={product.image?.productTablet} />
        <source media="(min-width: 1201px)" srcSet={product.image?.product} />
        <img src={product.image?.productMobile} className="" />
          </picture>
          

    </div>
  );
};

export default ProductCard;
