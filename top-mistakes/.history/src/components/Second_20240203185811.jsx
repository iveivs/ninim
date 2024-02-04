import { useEffect, useState } from "react"

const PRICE_ITEM = 10

export default function Second() {
    const [quantity, setQuantity] = useState(1)
    
    const totalPrice = quantity * PRICE_ITEM

    const hendleClick = () => {
        setQuantity(quantity + 1)
    }

    // useEffect( () => {
    //     setTotalprice( (prevQuantity) => {
    //         setTotalprice( quantity * PRICE_ITEM)
    //     })
    // }, [quantity])

    return (
        <>
            <p>Second Component</p>
            <div className="card">
                <button onClick={hendleClick}>Добавить один товар</button>
                <p>Итоговая цена: {totalPrice}</p>
            </div>
        </>
    )
}