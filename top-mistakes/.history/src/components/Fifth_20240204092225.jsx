import { useEffect, useState } from "react"

export default function Fifth({id}) {
    const [user, setUser] = useState({name : '', age:42, country: ''})

    const handleChange = (e) => {
        setUser({...user, 
        name: e.target.})
    }
    return (
        <> 
            <p>Fifth Component</p>
            
            
        </>
    )
}