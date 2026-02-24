import React from "react";
export default function Greeting({username}) {
    return (
        <>
            <h1>Hello {username}, Welcome to React</h1>
            <p style={{fontStyle: "italic"}}>Current Time: {new Date().toLocaleString()}</p>
            
        </>
    )
}