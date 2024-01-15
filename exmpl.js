import { useState } from 'react'
import "./style.css"
const content = [
  {title: 'HTML', text: 'Учи HTML и всё будет хорошо'},
  {title: 'CSS', text: 'Учи CSS и всё будет хорошо'},
  {title: 'JavaScript', text: 'Учи JavaScript и всё будет ещё лучше'}
]

function App() {
  const [ active, setActive ] = useState(null)
  return (
    <ul>
      {content.map((item, index) => (
        <li
          key={item.title}
          onClick={() => setActive(index)}
          className={index === active ? "active" : null}
        >
          <h3>{item.title}</h3>
          <div className='content'>{item.text}</div>
        </li>
      )) }
    </ul>
  );
}

export default App;