import { useEffect } from "react"
import { useState } from "react"

export default function SomeComponent() {
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))
    }, [])
    return (
        <>
        <p>Some Component</p>
        <div className="card">
            <h2>{product?.title}</h2>
            <h3>Description</h3>
            <p>{product.discription}</p>
        </div>
        </>
    )
}