const CategoryPageHero = ({ title }) => {
  return (
    <section className="pt-[90px] text-white text-center bg-black ">
      <div className="container px-8 mx-auto md:px-10 xl:px-[165px]">
        <div className="hidden md:block w-full h-[1px] bg-white/10" />
        <h1 className="uppercase heading4 py-8">{title}</h1>
      </div>
    </section>
  );
};

export default CategoryPageHero;
