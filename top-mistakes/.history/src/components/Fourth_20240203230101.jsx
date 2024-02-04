import { useEffect, useState } from "react"

export default function Fourth(id) {
    const [count, setCount] = useState(0)

    if(!id) {
        return <div className="card"></div>
    }
    
    return (
        <>  
            <p>Fourth Component</p>
            <div className="card">
                
                
            </div>
        </>
    )
}