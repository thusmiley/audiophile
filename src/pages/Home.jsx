import CategoryCards from "../components/CategoryCards";
import zx9Mobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx9Tablet from "../assets/home/tablet/image-speaker-zx9.png";
import zx9Desktop from "../assets/home/desktop/image-speaker-zx9.png";
import yx1Mobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import Prefooter from "../components/Prefooter";

const Home = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-[90px] text-white text-center home-hero-bg ">
        <div className="container px-8 mx-auto md:px-10 xl:px-[165px]">
          <div className="hidden md:block w-full h-[1px] bg-white/10" />
          <div className="pt-[108px] pb-[127px] md:pt-[126px] md:pb-[167px] md:max-w-[379px] md:mx-auto xl:pt-[128px] xl:pb-[158px] xl:text-left xl:ml-0">
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
        <CategoryCards />
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
      <Prefooter />
    </div>
  );
};

export default Home;
