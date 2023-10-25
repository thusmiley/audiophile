const Button = (props) => {
  const { link = "#", children, ...rest } = props;
  return (
      <a href={link} className="cta cta-orange text-white mx-auto cursor-pointer xl:ml-0" {...rest}>
        {children}
      </a>
  );
};

export default Button;
