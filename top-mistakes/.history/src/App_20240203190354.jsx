import { useState } from 'react'
import './App.css'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>main</h3>
      <First />
      <Second  />
      {/* <Third  /> */}
    </>
  )
}

export default App
