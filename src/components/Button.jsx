import { Link } from "react-router-dom";

const Button = (props) => {
  const { link = "#", children, ...rest } = props;
  return (
    <Link to={link} className="cta cta-orange text-white mx-auto block text-center cursor-pointer xl:ml-0" {...rest}>
      {children}
    </Link>
  );
};

export default Button;
