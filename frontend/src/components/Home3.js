import { useState, useEffect } from 'react';

const Home3 = () => {
 
  const [dataArticle2, setDataArticle2] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("/test4");
    const data2 = await data.json();
    setDataArticle2(data2);
  };
  return(
    <div>
      {
      dataArticle2.map(result =>(
        <p key={result.id}>{result.city}</p>
      ))
      }
    </div>
  );
}

export default Home3;