const QuantityButton = (props) => {
  const { onQuantityChange, quantity = "1", children, ...rest } = props;

  return (
    <div className="bg-lightGrey w-[120px] h-12 flex justify-center items-center text-[13px] tracking-[1px] font-bold text-center">
      <p className="text-black/25 mr-4 cursor-pointer hover:text-orange" onClick={onQuantityChange} {...rest}>
        -
      </p>
      <p className="w-7">{children ? children : quantity}</p>
      <p id="increase" className="text-black/25 ml-4 cursor-pointer hover:text-orange" onClick={onQuantityChange} {...rest}>
        +
      </p>
    </div>
  );
};

export default QuantityButton;
