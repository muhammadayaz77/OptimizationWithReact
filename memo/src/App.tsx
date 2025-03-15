// import React from 'react'

import { useState } from "react"
import Home from "./Home";

function App() {
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);
  return (
    <div>
      <h1>Count : {count}</h1>
      React memo 
      <Home data={data}></Home>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  )
}

export default App