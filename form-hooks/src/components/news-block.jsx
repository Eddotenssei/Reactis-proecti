export default function NewsBlock() {
  return (
    <>
      <div className="p-[10px] w-[600px] max-h-[300px] flex flex-col gap-4 items-center">
        <h1 className="text-lg font-semibold">სიახლეები</h1>

        <div className="border-2 border-yellow-400 p-[10px] w-[600px] max-h-[300px] flex flex-col gap-4 items-center">
          <h3 className="text-[21px] text-[#122A3C] font-semibold">
            მიმდინარეობს ინტერნეტშეჯიბრის მე-7 ტური
          </h3>
          <h3 className="text-[21px] text-[#6F6F6F] font-semibold">
            გამოქვეყნებულია მეექვსე ტურის შედეგებიც . . .
          </h3>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#243D4D] text-white px-2 py-2">1</button>
          <button className="bg-[#243D4D] text-white px-2 py-2">2</button>
          <button className="bg-[#243D4D] text-white px-2 py-2">3</button>
        </div>
      </div>
    </>
  );
}
