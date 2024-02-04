import { useEffect, useState } from "react"

// Counter
export default function Third() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount()
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