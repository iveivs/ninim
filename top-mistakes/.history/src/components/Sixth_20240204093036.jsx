import { useEffect, useState } from "react"

export default function Sixth({id}) {
    const [form, setUser] = useState({name : '', age:42, country: ''})

    const handleChange = (e) => {
        setUser({...user, 
        name: e.target.value})
    }
    return (
        <> 
            <p>Sixth Component</p>
            <form className="card">
                <input type="text" onChange={handleChange} placeholder="Ваше имя"/>
            </form>
            <p>{user.name}</p>
        </>
    )
}