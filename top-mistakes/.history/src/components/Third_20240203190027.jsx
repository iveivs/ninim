import { useEffect, useState } from "react"

export default function Third() {
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
        
        </>
    )
}