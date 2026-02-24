import react, { useEffect, useState } from "react"
export default function UserInfo({handleClick}) {
    const [userDetails, setUserDetails] = useState({
        username: "Morgan P",
        profession: "ADET Instructor"
    })
    const [randomNumber, setRandomNumber] = useState()
    const [count, setCount] = useState(0)
    useEffect(()=> {
        setRandomNumber(Math.floor(Math.random() * 10))
        
    }, [])
    return (
        <div>
            <h2>{userDetails.username}</h2>
            <h3>{userDetails.profession}</h3>
            <button onClick={handleClick}>Show Alert</button>

            <p>Your lucky number is {randomNumber}</p>

            <div>
                <p>Count: {count}</p>
                <button onClick={()=> setCount((e)=> e + 1)}>Click Me</button>
            </div>
        </div>
    )
}