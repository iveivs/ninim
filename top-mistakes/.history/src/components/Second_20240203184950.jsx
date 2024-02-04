import { useEffect, useState } from "react"

export default function Second() {
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalprice] = useState(0)

    const hendleClick = () => {
        setQuantity(quantity + 1)
    }

    useEffect( () => {
        setQuantity( rpevQuantity)
    })

    return (
        <>
            <p>Second Component</p>
            <div className="card">
                <button onClick={hendleClick}></button>
            </div>
        </>
    )
}