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
            { loading ? 'Заггрузка...' : <>
            <h2>{product?.title}</h2>
            <h3>Description</h3>
            <p>{product?.description}</p>
            </>}
        </div>
        </>
    )
}