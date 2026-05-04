import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div>
      <h1>{data.header}</h1>
      <p>{data.context}</p>
    </div>
  );
}