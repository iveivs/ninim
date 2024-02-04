import { useEffect, useState } from "react"

export default function Sixth({id}) {
    const [form, setForm] = useState({
        login: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form, 
        [e.target.name]: e.target.value})
    }
    return (
        <> 
            <p>Sixth Component</p>
            <form className="card">
                <input type="text"  onChange={handleChange} placeholder="Ваше имя"/>
                <input type="text" onChange={handleChange} placeholder="Ваше имя"/>
                <input type="text" onChange={handleChange} placeholder="Ваше имя"/>
            </form>
            <p>{form.name}</p>
        </>
    )
}