import react, { useEffect, useState } from "react"
import styles from "./shared.module.css"
export default function UserInfo({handleClick}) {
    const [userDetails, setUserDetails] = useState({
        username: "Morgan P",
        profession: "ADET Instructor"
    })
    const [count, setCount] = useState(0)
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100))

    const updateLuckyNumber = () => {
        setLuckyNumber(Math.floor(Math.random() * 100))
    }

    return (
        <div className={styles.centered}>
            <h2>{userDetails.username}</h2>
            <h3>{userDetails.profession}</h3>
            <button onClick={handleClick}>Show Alert</button>

           <div className={styles.flexRow}>
             <p>Your lucky number is {luckyNumber}</p>
             <button onClick={updateLuckyNumber}>Generate new Lucky Number</button>
           </div>

            <div className={styles.flexRow}>
                <p>Count: {count}</p>
                <button onClick={()=> setCount((e)=> e + 1)}>Click Me</button>
            </div>
        </div>
    )
}