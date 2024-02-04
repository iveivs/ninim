import { useEffect, useState } from "react"

export default function Fourth() {
    const [count, setCount] = useState(0)

    
    return (
        <>  
            <p>Fourth Component</p>
            <div className="card">
                <button onClick={handleClick}>Click me</button>
                <p>Значение count: {count}</p>
            </div>
        </>
    )
}