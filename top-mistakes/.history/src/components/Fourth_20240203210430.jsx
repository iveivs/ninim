import { useEffect, useState } from "react"

export default function Fourth({ id, string }) {
    const [count, setCount] = useState(0)

    
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