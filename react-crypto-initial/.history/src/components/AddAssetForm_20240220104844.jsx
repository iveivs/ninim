import { useState } from "react"

export default function AddAssetForm() {
    const [coin, setCoin] = useState(null)

    if(!coin)
    return (
        <form >FORM ASSET</form>
    )
}