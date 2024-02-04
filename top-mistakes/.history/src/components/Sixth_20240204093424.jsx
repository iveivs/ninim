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
                <input type="text" name="login" onChange={handleChange} placeholder="Логин"/>
                <input type="text" name="email" onChange={handleChange} placeholder="Почта"/>
                <input type="text" name="password" onChange={handleChange} placeholder="Пароль"/>
            </form>
            <p>{form.name} {form.email} {form.password}</p>
        </>
    )
}