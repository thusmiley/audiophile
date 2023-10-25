const QuantityButton = (props) => {
  const { handleQuantityChange, quantity = "1", children, ...rest } = props;

  return (
    <div>
      <p className="bg-lightGrey w-[120px] h-12 flex justify-center items-center text-[13px] tracking-[1px] font-bold">
        <span className="text-black/25 mr-[21px] cursor-pointer hover:text-orange" onClick={handleQuantityChange} {...rest}>
          -
        </span>
        {children? children : quantity}
        <span id="increase" className="text-black/25 ml-[21px] cursor-pointer hover:text-orange" onClick={handleQuantityChange} {...rest}>
          +
        </span>
      </p>
    </div>
  );
};

export default QuantityButton;
