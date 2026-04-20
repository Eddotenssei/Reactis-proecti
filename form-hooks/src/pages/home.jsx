import NewsBlock from "../components/news-block";
import JoinUs from "../components/UrlBlock";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComp from "../components/CarouselComp";
import UrlBLock from "../components/UrlBlock";

export default function Home() {
  return (
    <>
      <h1 className="bg-yellow-400 text-white p-[20px] text-[20px] m-[20px] text-center">
        მოგესალმებით მზიურის მათემატიკური ინტერნეტ-შეჯიბრის გვერდზე
      </h1>

      <CarouselComp />

      <div className="flex justify-center items-start gap-8 mt-6 p-[100px]">
        <NewsBlock />
        <UrlBLock />
      </div>
    </>
  );
}
