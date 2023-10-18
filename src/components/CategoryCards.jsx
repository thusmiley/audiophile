import earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryCard from "./CategoryCard";

const CategoryCards = () => {
  return (
    <div className="w-full space-y-[68px] flex flex-col justify-center items-center md:flex md:flex-row md:space-y-0 md:space-x-[10px]">
      <CategoryCard name='headphones' img={headphones} />
      <CategoryCard name='speakers' img={speakers} />
      <CategoryCard name='earphones' img={earphones} />
    </div>
  );
};

export default CategoryCards;
