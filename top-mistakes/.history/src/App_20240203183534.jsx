import { useState } from 'react'
import './App.css'
import SomeComponent from './components/First'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>main</h3>
    <SomeComponent />
    </>
  )
}

export default App
