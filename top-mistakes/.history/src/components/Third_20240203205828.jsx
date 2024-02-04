import { useEffect, useState } from "react"

// Counter
export default function Third() {
    const [count, setCount] = useState(0)

    return (
        <>  
            <p>Third Component</p>
            <div className="card">
                <button onc>Click me</button>
            </div>
        </>
    )
}