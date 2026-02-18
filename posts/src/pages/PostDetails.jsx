import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

export default function PostDetails() {
  const { id } = useParams();
    const [posts, setPosts] = useState([]);




    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  },[id]);



  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <button><Link to={`/`}>main page</Link></button>
    </div>
  );
}
