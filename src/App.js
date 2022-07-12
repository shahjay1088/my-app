import './App.css'
import { useState } from 'react';

function App(){
  const [count,setCount]=useState(0)
 
  return(
    <div>
    <h1 style={{color:'red'}}>Count:- {count}</h1>
    <button onClick={()=>{
     setCount(count+1);
    }}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
  </div>
  )
}

export default App