import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UrlBlock from "../components/UrlBlock";


export default function Provision() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/provision/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
   <div className="m-20 min-h-screen flex items-center justify-center bg-white px-6">
  <div className="flex items-start gap-10 w-full max-w-6xl">

    <div className="border-2 border-yellow-400 bg-yellow-50 rounded-xl p-5 shadow-sm w-full max-w-xl">
      <h1 className="text-center text-xl font-semibold text-black mb-3">
        {data.header}
      </h1>
      <p className="text-center text-gray-700">
        {data.context}
      </p>
    </div>

    <div className="w-full max-w-xl">
      <UrlBlock />
    </div>

  </div>
</div>
  );
}