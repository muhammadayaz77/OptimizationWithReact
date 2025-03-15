import React, { Suspense } from "react"
import Banner from "./Banner"
const CoinsTable = React.lazy(() => import("./CoinsTable"))

function App(){
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<p>loading...</p>}>
      <CoinsTable />
      </Suspense>
    </div>
  )
}

export default App