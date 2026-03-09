import React, { useState } from "react"
import TaskForm from '../components/TaskForm'
import shared from "./shared.module.css"
export default function TaskList() {
    // AI Generated Tasks.
    
    const [allTasks, setAllTasks] = useState([
        "Finish project documentation",
        "Review pull requests",
        "Prepare lecture materials",
        "Update server monitoring dashboard",
        "Refactor CSS to Tailwind CSS"
    ])
    const [selectedTask, setSelectedTask] = useState(getRandomTask())
    const [searchInput, setSearchInput] = useState("")

    const onSearchUpdate = (e) => {
        setSearchInput(e.target.value)
        setSelectedTask(allTasks.find((task)=> {
            return task.toLowerCase().includes(e.target.value.toLowerCase())
        }))
    }

    const sortTasks = () => {
        setAllTasks(
            [...allTasks].sort((a, b)=> a.localeCompare(b))
        )
    }

    return (
        <>
            <h3>{selectedTask ?? `No task found with input: ${searchInput}`}</h3>
            <div className={shared.flexRow}>
                <input type="text" placeholder="Search Tasks" onChange={onSearchUpdate}/>
                <button onClick={sortTasks}>Sort by Name</button>
            </div>
            <div>
                <ul style={{display: "flex", flexDirection: "column", width: 400}}>
                {
                    allTasks.map((task)=> (
                        <div className={shared.flexRow} style={{marginTop: 10}}>
                            <li style={{textAlign: "start", flex: 1}} key={task}>{task}</li>
                            {/* Delete Handler */}
                            <button onClick={()=> {
                                if(confirm("Are you sure you want to delete: " + task)) {
                                    setAllTasks(allTasks.filter((val)=> {
                                        return val != task
                                    }))
                                }
                            }}>Delete Task</button>
                            
                        </div>
                    ))
                }
                </ul>
            </div>
            <TaskForm taskAddEvent={(taskName)=> setAllTasks(prev => [...prev, taskName])}></TaskForm>
        </>
    )

    function getRandomTask() {
        return allTasks[Math.floor(Math.random() * allTasks.length)]
    }
}