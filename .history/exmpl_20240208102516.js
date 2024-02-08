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
// Стили для этого примера
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// body {
//   padding-top: 5rem;
//   max-width: 1000px;
//   margin: 0 auto;
//   font-family: 'Roboto' , sans-serif;
// }
// ul {
//   list-style: none;
// }
// li {
//   padding: 1rem;
//   cursor: pointer;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   margin-bottom: 1rem;
//   transition: all 0.3s;
// }
// li:hover {
//   background-color: #eee;
// }
// li > .content {
//   display: none;
// }
// li.active {
//   background-color: rgb(210, 210, 106);
// }
// li.active > .content {
//   display: block;
// }