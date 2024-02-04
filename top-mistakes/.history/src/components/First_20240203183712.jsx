import { useEffect } from "react"
import { useState } from "react"

export default function First() {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => setProduct(json))

    }, [])
    return (
        <>
        <p>Some Component</p>
        <div className="card">
            { loading ? 'Заггрузка' : }
            <h2>{product?.title}</h2>
            <h3>Description</h3>
            <p>{product?.description}</p>
        </div>
        </>
    )
}