import { useEffect, useState } from "react"

export default function Second() {
    const [quantity, setQuantity] = useState(0)
    const [totalPrice]

    const hendleClick = () => {
        setQuantity(quantity + 1)
    }
    return (
        <>
            <p>Second Component</p>
            <div className="card">
                <button onClick={hendleClick}></button>
            </div>
        </>
    )
}