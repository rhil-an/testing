import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold ">
      Sir David Beckham
    </h1>
    <h2>hello</h2>
      <div>
        <a href="https://google.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
         
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          
        </a>
      </div>
      <h1>"Insert Normal Title"</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 69
      )}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h2>Cinq East DOn Quixote</h2>
    </>
  )
}

export default App
