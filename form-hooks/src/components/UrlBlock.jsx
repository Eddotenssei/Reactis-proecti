import mtavarSaiti from "../assets/mtavari-saiti.png";
import blog from "../assets/mziuris-blogi.png";
import concurs from "../assets/matematikuri.png";
import imedi from "../assets/imedi-xvalis.png";

export default function UrlBLock() {
  return (<>   
  <div className="flex flex-col gap-4"> 
      <h3 className=" text-lg font-semibold">
        ეწვიეთ ჩვენს Facebook გვერდს
      </h3>
   <div className="border-2 border-yellow-400 p-[10px] max-w-[350px] flex flex-col gap-4">
      

      <a href="https://mziuri.ge/">
        <img src={mtavarSaiti} alt="" width={320} height={170} />
      </a>

      <a href="https://www.blog.mziuri.ge/">
        <img src={blog} alt="" width={320} height={170} />
      </a>

      <a href="https://concurs.mziuri.ge/">
        <img src={concurs} alt="" width={320} height={170} />
      </a>

      <a href="https://imedi.mziuri.ge/">
        <img src={imedi} alt="" width={320} height={170} />
      </a>

    </div>
    </div>
    </>

  );
}