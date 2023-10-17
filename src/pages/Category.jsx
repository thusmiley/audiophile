import { useParams } from "react-router-dom";
import products from "../data/products.json";
import CategoryPageHero from "../components/CategoryPageHero";
import ProductCard from "../components/ProductCard";

const Category = () => {
  const params = useParams();
  const category = products[params.category];

  return (
    <div>
      {/* hero banner */}
      <CategoryPageHero title={params.category} />

      {/* product cards */}
      <section>
        {/* {category.map((product) => (
          <ProductCard
            key={product.id}
            link={`/${params.category}/${product.name.split(` `).join(`-`)}`}
            product={product}
          />
        ))} */}
      </section>
    </div>
  );
};

export default Category;
