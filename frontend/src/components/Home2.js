
import { useState, useEffect } from 'react';

const Home2 = () => {
    const [dataArticle2, setDataArticle2] = useState([]);
    useEffect(() => {
        fetch("/test4")
        .then(res => res.json())
        .then(data => {
        setDataArticle2(data);
        });
    }, []);
    
    

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

export default Home2;

