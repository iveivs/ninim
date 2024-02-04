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
            <h1></h1>
        </div>
        </>
    )
}