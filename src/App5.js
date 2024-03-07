import React from 'react'
import { useState, useEffect  } from 'react';

export default function App5() {
    const [runs, setRuns] =useState(0);
    const [wickets, setWickets] =useState(0);
     console.log("Component loaded");
     useEffect(()=>{
      if (wickets>o) console.log('wickets:${wickets}.better luck next time');
     },[wickets]);
     useEffect(()=>{
      if (runs>o) console.log('good job score:${runs}');
     },[runs]);
  
  
     
  return (

    <div>
      <button onClick={() => setRuns((prevState) => prevState + 1)}>Click</button>
      <span>{runs}</span>
      <button onClick={() => setWickets((prevState) => prevState + 1)}>Click</button>
      <span>{wickets}</span>
    </div>
    
  );
}
  

