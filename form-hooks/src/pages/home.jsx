import NewsBlock from "../components/news-block";
import JoinUs from "../components/JoinUs";
import mziuriImage from "../assets/mziuri-carusel.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
 const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

  return (
    <>
      <h1 className="bg-yellow-400 text-white p-[20px] text-[20px] m-[20px] text-center">
        მოგესალმებით მზიურის მათემატიკური ინტერნეტ-შეჯიბრის გვერდზე
      </h1>

      <div className="">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          showDots
          containerClass="py-6"
          itemClass="flex justify-center"
>
  <div className="flex justify-center">
    <img
      src={mziuriImage}
      alt="Mziuri"
      className="h-[400px] w-[1200px] object-contain rounded-xl"
    />
  </div>

  <div className="flex justify-center">
    <img
      src={mziuriImage}
      alt="Mziuri"
      className="h-[400px] w-[1200px] object-contain rounded-xl"
    />
  </div>

  <div className="flex justify-center">
    <img
      src={mziuriImage}
      alt="Mziuri"
      className="h-[400px] w-[1200px] object-contain rounded-xl"
    />
  </div>
</Carousel>
      </div>

      <div className="flex justify-center items-start gap-8 mt-6 p-[100px]">
        <NewsBlock />
        <JoinUs />
      </div>
    </>
  );
}
