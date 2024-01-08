import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
          <img src={'https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg'} className="logo react" alt="React logo" />
      </div>
      <h1>Hello Kalvium</h1>
    </div>
  )
}

export default App
