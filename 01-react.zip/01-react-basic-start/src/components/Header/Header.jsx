import logo from "/logo-name.svg"
import { useState } from "react"
import "./Header.css"
import { useEffect } from "react"

export default function Header() {
    const [now, setNow] = useState(new Date())

    useEffect(()=> {
        const interval = setInterval(()=> setNow(new Date()), 1000)
        return () => {
            clearInterval(interval)
            console.log('cleaned');
        }
    }, [])

    

    return ( 
        <header>
            <img src={logo} />
            <h2>React University</h2>
            <span>Time to learn { now.toLocaleTimeString() }</span>
        </header>
    );
}
