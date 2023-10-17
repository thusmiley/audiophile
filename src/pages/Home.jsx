import Categories from "../components/Categories";
import { CategoryList } from "../data/cardData";
import zx9Mobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../assets/home/desktop/image-speaker-zx9.png";
import yx1Mobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import bestgearMobile from "../assets/shared/mobile/image-best-gear.jpg";
import bestgearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import bestgearDesktop from "../assets/shared/desktop/image-best-gear.jpg";

const Home = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-[90px] text-white text-center home-hero-bg ">
        <div className="container px-8 mx-auto md:px-10 xl:px-[165px]">
          <div className="hidden md:block w-full h-[1px] bg-white/10" />
          <div className="pt-[108px] pb-[112px] md:pt-[126px] md:pb-[167px] md:max-w-[379px] md:mx-auto xl:pt-[128px] xl:pb-[158px] xl:text-left xl:ml-0">
            <span className="tag text-white/50">NEW PRODUCT</span>
            <h1 className="heading1 mt-4 mb-6 uppercase md:my-6">XX99 Mark II HeadphoneS</h1>
            <p className="paragraph text-white/75 mb-[43px] md:mb-[55px]">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <a href="/" className="cta cta-orange">
              See Product
            </a>
          </div>
        </div>
      </section>

      {/* categories */}
      <section className="container px-8 mx-auto flex flex-col space-y-[52px] text-center pt-[92px] pb-[120px] md:flex-row md:space-y-0 md:space-x-[10px] md:pt-[148px] md:pb-[96px] md:px-10 xl:px-[165px]">
        {CategoryList.map((category) => (
          <Categories key={category.id} {...category} />
        ))}
      </section>

      {/* featured products */}
      <section>
        <div className="container px-8 mx-auto text-center space-y-6 md:space-y-8 md:px-10 xl:px-[165px]">
          {/* zx9 speaker */}
          <div className="zx9-bg px-6 py-[55px] rounded-[8px] text-white md:pb-[79px] md:pt-[52px] xl:flex xl:justify-center xl:items-center xl:pb-[124px] xl:pt-[133px] xl:overflow-hidden">
            <picture className="xl:w-[60%]">
              <source media="(max-width: 680px)" srcSet={zx9Mobile} />
              <source media="(max-width: 1024px)" srcSet={zx9Tablet} />
              <source media="(min-width: 1025px)" srcSet={zx9Desktop} />
              <img src={zx9Mobile} className="h-[207px] w-full object-contain md:h-[237px] xl:h-[493px] xl:mb-[-135px]" />
            </picture>
            <div className="md:max-w-[349px] md:mx-auto xl:w-[40%] xl:max-w-full xl:text-left xl:mx-[95px] 2xl:ml-[125px]">
              <h2 className="heading1 mt-8 mb-6 md:mt-[64px]">ZX9 SPEAKER</h2>
              <p className="paragraph mb-10 text-white/75 md:mb-[55px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <a href="/" className="cta cta-black text-white">
                SEE PRODUCT
              </a>
            </div>
          </div>

          {/* zx7 speaker */}
          <div className="zx7-bg px-6 py-[101px] rounded-[8px] text-black text-left md:px-[62px] xl:px-[95px]">
            <h2 className="heading4 mb-[47px]">ZX7 SPEAKER</h2>
            <a href="/" className="cta cta-transparent">
              SEE PRODUCT
            </a>
          </div>

          {/* yx1 earphones */}
          <div className="md:flex md:items-center md:space-x-[11px] xl:space-x-[30px]">
            <picture className="md:w-1/2">
              <source media="(max-width: 680px)" srcSet={yx1Mobile} />
              <source media="(max-width: 1024px)" srcSet={yx1Tablet} />
              <source media="(min-width: 1025px)" srcSet={yx1Desktop} />
              <img src={yx1Mobile} className="h-[200px] w-full object-cover rounded-[8px] md:h-[320px]" />
            </picture>
            <div className="mt-6 bg-lightGrey rounded-[8px] pt-10 pb-[56px] px-6 text-left md:mt-0 md:py-[101px] md:h-[320px] md:px-[52px] md:w-1/2 xl:px-[95px]">
              <h2 className="heading4 mb-[47px]">YX1 EARPHONES</h2>
              <a href="/" className="cta cta-transparent">
                SEE PRODUCT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* prefooter */}
      <section className="my-[120px] md:my-[96px] xl:my-[200px]">
        <div className="container px-8 mx-auto text-center md:px-10 xl:px-[165px] xl:flex xl:flex-row-reverse xl:justify-between xl:items-center xl:h-[588px]">
          <picture className="xl:w-1/2">
            <source media="(max-width: 680px)" srcSet={bestgearMobile} />
            <source media="(max-width: 1280px)" srcSet={bestgearTablet} />
            <source media="(min-width: 1281px)" srcSet={bestgearDesktop} />
            <img src={bestgearMobile} className="h-[300px] w-full object-cover rounded-[8px] xl:h-[588px]" />
          </picture>

          <div className="md:max-w-[573px] md:mx-auto xl:w-1/2 xl:text-left xl:mr-[125px]">
            <h2 className="heading3 uppercase mt-10 mb-8 xl:mt-0">
              Bringing you the <span className="text-orange">best</span> audio gear
            </h2>
            <p className="paragraph text-black/50">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom
              and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
              make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
