import react, { useEffect, useState } from "react"
export default function UserInfo() {
    const [userDetails, setUserDetails] = useState({
        username: "Morgan P",
        profession: "ADET Instructor"
    })
    const [randomNumber, setRandomNumber] = useState()
    useEffect(()=> {
        setRandomNumber(Math.floor(Math.random() * 10))
        
    }, [])
    return (
        <div>
            <h2>{userDetails.username}</h2>
            <h3>{userDetails.profession}</h3>
            <p>Your lucky number is {randomNumber}</p>
        </div>
    )
}