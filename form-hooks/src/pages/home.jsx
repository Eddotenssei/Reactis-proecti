import NewsBlock from "../components/news-block";
import Shemogviertdi from "../components/shemogviertdi";
// import Slideshow from "../components/slideshow";

export default function Home() {
  return (
    <>
      {/* <Slideshow /> */}
      <h1 className="bg-yellow-400 text-white p-[20px] text-[20px] m-[20px] text-center">
        მოგესალმებით მზიურის მათემატიკური ინტერნეტ-შეჯიბრის გვერდზე
      </h1>
      <div className="flex justify-center items-start gap-8 mt-6 p-[100px]">
        <NewsBlock />
        <Shemogviertdi />
      </div>
    </>
  );
}
