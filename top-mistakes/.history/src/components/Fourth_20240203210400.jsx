import { useEffect, useState } from "react"

export default function Fourth() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevState => { prevState + 1 }) 
    }

    return (
        <>  
            <p>Third Component</p>
            <div className="card">
                <button onClick={handleClick}>Click me</button>
                <p>Значение count: {count}</p>
            </div>
        </>
    )
}