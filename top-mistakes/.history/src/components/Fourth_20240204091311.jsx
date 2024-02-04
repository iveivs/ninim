import { useEffect, useState } from "react"

export default function Fourth({id}) {
    const [count, setCount] = useState(0)

    if(!id) {
        return 
    }
    
    return (
        <> 
            <p>Fourth Component</p>
            {!id ? <div className="card">Нет фотографии</div><div className="card">Аватар пользователя</div> :
            }
            
        </>
    )
}