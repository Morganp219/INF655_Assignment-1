import React, { useState } from "react";
export default function Greeting({username}) {
    let greetingMessages = ["Hello, %user%", "Hello %user%, Welcome to React"]
    const [messageShown, setMessageShown] = useState(greetingMessages[0])

    const handleGreetingChange = () => {
        setMessageShown(greetingMessages[Math.floor(Math.random() * greetingMessages.length)])
    }

    return (
        <>
            <h1>{messageShown.replace("%user%", username)}</h1>
            <p style={{fontStyle: "italic"}}>Current Time: {new Date().toLocaleString()}</p>
            <button onClick={handleGreetingChange}>Change Greeting</button>
        </>
    )
}