// import React from 'react'

import { useCallback, useEffect, useState } from "react"
import CountButton from "./CountButton"

function App() {
  const [count,setCount] = useState(0)
  
  const incrementCount = useCallback(()=> {
    setCount(prev => prev + 1)
  },[])
  useEffect(() => {
    console.log("app render")
  },[incrementCount])
  return (
    <div>
      <h1>Count : {count}</h1>
      <CountButton incrementCount={incrementCount} />
    </div>
  )
}

export default App