import { useState } from "react"
import {useAuth} from "../UserContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const onLoginClick = async () => {
        try {
            await login(email, password)
            navigate("/dashboard")
        } catch (err) {
            setError(err.message || "Login failed")
        }
    }
    return (
        <form style={{display: "flex", flexDirection: "column", gap: 10}}>
            {error && <p style={{color: "red"}}>{error}</p>}
            <p>Email</p>
            <input placeholder="email@email.com" type="email" onChange={(e)=> setEmail(e.target.value)}></input>
            <p>Password</p>
            <input type="password" placeholder="********" onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={onLoginClick} type="button">Login</button>
            <button onClick={()=> navigate("/Signup")}>Sign Up</button>
        </form>
    )
}