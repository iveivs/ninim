import { useState } from "react"

export default function AddAssetForm() {
    const [coin, setCoin] = useState(null)

    if(!coin) {
        return
    }
    return (
        <form >FORM ASSET</form>
    )
}