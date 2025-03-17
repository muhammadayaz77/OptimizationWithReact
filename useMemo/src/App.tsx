import { useMemo, useState } from "react"

function App() {
  const [count,setCount] = useState(0);
  const [input,setInput] = useState(0);
  const expensiveCalculation = (num : number) => {
    for(let i = 0;i<1000350000;i++){}
    return num * 2;
  }
  let doubleValue = useMemo(() => 
    expensiveCalculation(input),[input])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Count : {count}</h1>
      <input type="number"
      onChange={(e) => setInput(e.target.value)}
      />
      <h1>Double Value : {doubleValue}</h1>
    </div>
  )
}

export default App