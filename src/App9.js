import React, { useState } from 'react';
import { useMemo,useEffect } from 'react';

export default function App9() {
    const[count,setCount]=useState(0);
    const[flag,setFlag]=useState(0);
    const f1 =()=>{
        let i;
        for(i=0;i<Flag**2;i++){}
        console.log("result function called");
        return i;
    };
    const result=userName(()=> f1(),[flag]);
  return (
    <div>
        <h1>useMemo</h1>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        <button onClick={()=>setCount(flag+1)}>flag:{Flag}</button>
        <p>Result:(result)</p>
        
      
    </div>
  )
}
