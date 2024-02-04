import { useState } from 'react'
import './App.css'
import Fifth from './components/Fifth'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import Third from './components/Third'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>main</h3>
      <hr />
      <First />
      <hr />
      <Second  />
      <hr />
      <Third  />
      <hr />
      <Fourth id={1} />
      <hr />
      <Fifth  />
      
    </>
  )
}

export default App
