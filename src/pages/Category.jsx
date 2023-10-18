import { useParams } from "react-router-dom";
import products from "../data/products.json";
import CategoryPageHero from "../components/CategoryPageHero";
import ProductCard from "../components/ProductCard";
import Prefooter from "../components/Prefooter";
import CategoryCards from "../components/CategoryCards";

const Category = () => {
  const params = useParams();
  const category = products[params.category];

  return (
    <div>
      {/* hero banner */}
      <CategoryPageHero title={params.category} />

      {/* product cards */}
      <section className="container px-8 mx-auto flex flex-col-reverse justify-center items-center mt-[64px] mb-[120px] space-y-[120px] space-y-reverse md:px-10 md:mt-[120px] xl:px-[165px]">
        {category.map((product) => (
          <ProductCard key={product.id} link={`/${params.category}/${product.name.split(` `).join(`-`).toLowerCase()}`} product={product} />
        ))}
      </section>

      <div className="mt-[172px] container px-8 mx-auto md:px-10 xl:px-[165px]">
        <CategoryCards />
      </div>

      <Prefooter />
    </div>
  );
};

export default Category;
