import { useEffect, useState } from "react"

// Counter
export default function Third() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>  
            <p>Third Component</p>
            <div className="card">
                <button onClick={handleClick}>Click me</button>
                <p>Значение count: {}</p>
            </div>
        </>
    )
}