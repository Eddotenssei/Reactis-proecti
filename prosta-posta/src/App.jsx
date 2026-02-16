import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './App.css'


export default function App() {
  const [postData, setPostData] = useState([])
  
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20`);
        const data = await response.json()
        setPostData(data)
      } catch (err) {
        console.log(err);
        
      }
    }
    fetchData();
  })

  return (
    <>
      <div>
        {postData.map((item)=>(
          <div>
            <Link to={`/postDetails/${item.id}`}></Link>
          </div>
        ))}
      </div>
    </>
  )
}

