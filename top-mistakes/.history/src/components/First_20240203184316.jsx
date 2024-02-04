import { useEffect, useState } from "react"


export default function First() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => {
            setProduct(json) 
            setLoading(false)
        })

    }, [])
    return (
        <>
        <p>Some Component</p>
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