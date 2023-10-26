const CategoryPageHero = ({ title }) => {
  return (
    <section className="pt-[90px] text-white text-center bg-black ">
      <div className="container px-6 mx-auto md:px-10 xl:px-[165px]">
        <div className="hidden md:block w-full h-[1px] bg-white/10" />
        <h1 className="uppercase heading4 py-8 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] md:pt-[105px] md:pb-[97px] xl:pt-[98px]">{title}</h1>
      </div>
    </section>
  );
};

export default CategoryPageHero;
