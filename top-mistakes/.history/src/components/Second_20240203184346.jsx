import { useEffect, useState } from "react"

export default function First() {
    const [product, setProduct] = useState(null)

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