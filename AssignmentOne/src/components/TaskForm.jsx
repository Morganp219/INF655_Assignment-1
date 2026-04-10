import { useState } from "react"

export default function TaskForm({taskAddEvent}) {
    const [taskName, setTaskName] = useState("")
    const [taskDesc, setTaskDesc] = useState("")    
    const addTask = () => {
        if(taskName.length <= 0) {
            alert("You must have a task name entered")
            return;
        }
        if(taskDesc.length <= 0) {
            alert("You must have a task description entered")
            return;
        }
        console.log(taskName);
        taskAddEvent(taskName, taskDesc)
        
    }

    return (
        <section style={{display: "flex", gap: 9, justifyContent: "center"}}>
            <input required type="text" placeholder="Title" maxLength={90} onChange={(e)=> setTaskName(e.target.value)} />
            <input required type="text" placeholder="Description" onChange={(e)=> setTaskDesc(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </section>
    )
}