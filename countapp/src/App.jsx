import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
          <p>count is {count}</p>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
         Decrease
        </button>
        <button onClick={() => setCount((count) => count * 0)}>
          Reset
        </button>
        
        
      </div>
      
    </>
  )
}


export default App
