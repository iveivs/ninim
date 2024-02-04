import { useState } from 'react'
import './App.css'
import First from './components/First'
import Second from './components/Second'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>main</h3>
    <First />
    <Second  />
    
    </>
  )
}

export default App
