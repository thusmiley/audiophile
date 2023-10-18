import { Link } from "react-router-dom";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const CategoryCard = (props) => {
  const { name, img } = props;

  return (
    <div className="bg-lightGrey rounded-[8px] pb-[22px] w-full fadein text-center">
      <img src={img} alt={name} className="h-[120px] w-full object-contain -mt-10" />
      <h2 className="heading2 uppercase mt-2 mb-[17px] text-black">{name}</h2>
      <div className="text-[13px] tracking-[1px] text-black/50 inline-flex items-center hover:text-orange">
        <Link to={`/${name}`}>SHOP</Link><img src={arrow} alt="arrow" className=" ml-[18px]" />
      </div>
    </div>
  );
};

export default CategoryCard;
