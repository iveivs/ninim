import { useEffect, useState } from "react"

export default function Second() {
    const [quantity, setQuantity] = useState(0)

    const hendlyClick = () => {
        setQuantity(quantity + 1)
    }
    return (
        <>
            <p>Second Component</p>
            <div className="card">
                
            </div>
        </>
    )
}