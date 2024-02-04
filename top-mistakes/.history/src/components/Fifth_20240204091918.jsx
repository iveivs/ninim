import { useEffect, useState } from "react"

export default function Fifth({id}) {
    const [count, setCount] = useState(0)

    return (
        <> 
            <p>Fifth Component</p>
            {!id ? <div className="card">Нет фотографии</div> :
            <div className="card">Аватар пользователя</div>}
            
        </>
    )
}