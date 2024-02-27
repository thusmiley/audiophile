import arrow from "/images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const { name, img } = props;

  return (
    <div className="bg-lightGrey rounded-[8px] pb-[22px] w-full fadein text-center h-[165px] xl:h-[204px]">
      <img src={img} alt={name} className="h-[120px] w-full object-contain -mt-10 xl:h-full xl:mt-[-60px]" />
      <h2 className="heading2 uppercase mb-[17px] text-black xl:mb-[15px] xl:mt-[-10px]">{name}</h2>
      <div className="text-[13px] tracking-[1px] text-black/50 inline-flex items-center hover:text-orange">
        <Link to={`/${name}`}>SHOP</Link>
        <img src={arrow} alt="arrow" className=" ml-[18px]" />
      </div>
    </div>
  );
};

export default CategoryCard;
