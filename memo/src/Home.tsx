import React from "react"

function Home({data}:{data:number}) {
  console.log('home render',data)
  return (
    <div>Home
      <h1>{data}</h1>
    </div>
  )
}

export default React.memo(Home)