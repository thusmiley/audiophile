import { CategoryList } from "../data/cardData";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const Categories = ({ img, name, link }) => {
  return (
    <div className="bg-lightGrey rounded-[8px] pb-[22px] w-full fadein">
      <img src={img} alt={name} className="h-[120px] w-full object-contain -mt-10" />
      <h2 className="heading2 uppercase mt-4 mb-[17px] text-black">{name}</h2>
      <a href={link} className="text-[13px] tracking-[1px] text-black/50 inline-flex items-center hover:text-orange">
        SHOP <img src={arrow} alt="arrow" className=" ml-[18px]" />
      </a>
    </div>
  );
};

export default Categories;
