import { useState } from "react"

export default function TaskForm() {
    const [taskName, setTaskName] = useState("")

    const addTask = () => {
        console.log(taskName);
        
    }

    return (
        <section style={{display: "flex", gap: 9, justifyContent: "center"}}>
            <input type="text" onChange={(e)=> setTaskName(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </section>
    )
}