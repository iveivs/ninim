import { useEffect, useState } from "react"\

export default function Second() {
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalprice] = useState(0)

    const hendleClick = () => {
        setQuantity(quantity + 1)
    }

    useEffect( () => {
        setTotalprice( (prevQuantity) => {
            setTotalprice( quantity * )
        })
    }, [quantity])

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