import React from "react";
export default function Greeting() {
    return (
        <>
            <h1>Hello, Welcome to React</h1>
            <p style={{fontStyle: "italic"}}>Current Time: {new Date().toLocaleString()}</p>
        </>
    )
}