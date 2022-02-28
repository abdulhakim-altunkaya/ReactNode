import React from 'react';
import { useState, useEffect } from 'react';

function Home() {

    const [myData, setMyData] = useState([]);
    useEffect(() => {
      fetch("/test4")
      .then(res => res.json())
      /*res.json() in react means: when you try fetch data from a server, 
      it will send you a RESPONSE which contains tons of irrelevant information. 
      To target only the BODY part of the response and to convert it 
      from JSON to javascript object, you use res.json().*/
      .then(result => {
        setMyData(result)
      })
    }, [])


    return (
      <div>
      {
      myData.map(record =>(
          <p key={record.id}>{record.age} and {record.id}</p>
      ))
      }
      </div>
    )
}

export default Home;