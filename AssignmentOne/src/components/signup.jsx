import { useState } from "react"
import {useAuth} from "../UserContext"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const { register } = useAuth();
    const navigate = useNavigate();
    
    const onSignupClick = async () => {
        if(password != confirmPassword) {
            alert("Please retype your password and try again!")
            return
        }
        try {
            await register(email, password)
            navigate("/dashboard")
        } catch (err) {
            setError(err.message || "Signup failed")
        }
    }
    return (
        <form style={{display: "flex", flexDirection: "column", gap: 10}}>
            {error && <p style={{color: "red"}}>{error}</p>}
            <p>Email</p>
            <input placeholder="email@email.com" type="email" onChange={(e)=> setEmail(e.target.value)}></input>
            <p>Password</p>
            <input type="password" placeholder="********" onChange={(e)=> setPassword(e.target.value)}/>
            <p>Confirm Password</p>
            <input type="password" placeholder="********" onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <button onClick={onSignupClick} type="button">Sign Up</button>
            <button onClick={()=> navigate("/Login")}>Sign In Instead?</button>

        </form>
    )
}