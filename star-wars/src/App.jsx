import './App.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function App() {

  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://swapi.info/api/species`,
        );
        const data = await response.json();
        setStarWarsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  },[]);


  return (
    <>
      <div className='flex flex-col  justify-center items-center'>
        {starWarsData.map((item) => (
  <Link  to={`/SpeciesDetails`}><button className='border-3 rounded-lg m-3 p-5 '>{item.name}</button>
  </Link>
))}

      </div>

    </>
  )
}

export default App
