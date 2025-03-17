import React from "react"

interface CountButtonProps {
  incrementCount : () => void
}
function CountButton({incrementCount} : CountButtonProps) {
  console.log("count button render")
  return (
    <div>
      <button onClick={incrementCount}>Click</button>
    </div>
  )
}

export default React.memo(CountButton)