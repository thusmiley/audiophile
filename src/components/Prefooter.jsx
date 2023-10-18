import bestgearMobile from "../../public/images/shared/mobile/image-best-gear.jpg";
import bestgearTablet from "../../public/images/shared/tablet/image-best-gear.jpg";
import bestgearDesktop from "../../public/images/shared/desktop/image-best-gear.jpg";

const Prefooter = () => {
  return (
    <section className="my-[120px] md:my-[96px] xl:my-[200px]">
      <div className="container px-8 mx-auto text-center md:px-10 xl:px-[165px] xl:flex xl:flex-row-reverse xl:justify-between xl:items-center xl:h-[588px]">
        <picture className="xl:w-1/2">
          <source media="(max-width: 680px)" srcSet={bestgearMobile} />
          <source media="(max-width: 1280px)" srcSet={bestgearTablet} />
          <source media="(min-width: 1281px)" srcSet={bestgearDesktop} />
          <img src={bestgearMobile} className="h-[300px] w-full object-cover rounded-[8px] xl:h-[588px]" />
        </picture>

        <div className="md:max-w-[573px] md:mx-auto xl:w-1/2 xl:text-left xl:mr-[125px]">
          <h2 className="heading3 uppercase mt-10 mb-8 md:mt-[63px] xl:mt-0">
            Bringing you the <span className="text-orange">best</span> audio gear
          </h2>
          <p className="paragraph text-black/50">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prefooter;
