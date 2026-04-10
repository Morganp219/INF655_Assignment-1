import React, { useEffect, useState } from "react"
import TaskForm from '../components/TaskForm'
import shared from "./shared.module.css"
import { useAuth } from "../UserContext"
import { addTask, deleteTask, getTasks } from "../firebase/fbtask"
export default function TaskList() {
    const {user} = useAuth()
    const [allTasks, setAllTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)
    const [searchInput, setSearchInput] = useState("")
    
    useEffect(()=> {
        if (user) {
            getTasks(user.uid).then((tasks)=> {
                setAllTasks(tasks)
            })
        }
    }, [user])
    
    const onSearchUpdate = (e) => {
        setSearchInput(e.target.value)
        setSelectedTask(allTasks.find((item)=> {
            return item.task.taskName.toLowerCase().includes(e.target.value.toLowerCase())
        }))
    }

    const sortTasks = () => {
        setAllTasks(
            [...allTasks].sort((a, b)=> a.task.taskName.localeCompare(b.task.taskName))
        )
    }

    return (
        <>
            <h3>{selectedTask ? `${selectedTask.task.taskName} - ${selectedTask.task.taskDescription}` : `No task found with input: ${searchInput}`}</h3>
            <div className={shared.flexRow}>
                <input type="text" placeholder="Search Tasks" onChange={onSearchUpdate}/>
                <button onClick={sortTasks}>Sort by Name</button>
            </div>
            <div>
                <ul style={{display: "flex", flexDirection: "column", width: 400}}>
                {
                    allTasks.map((item)=> (
                        <div className={shared.flexRow} style={{marginTop: 10}} key={item.id}>
                            <li style={{textAlign: "start", flex: 1}} key={item.task.id}>{item.task.taskName} - {item.task.taskDescription}</li>
                            {/* Delete Handler */}
                            <button onClick={()=> {
                                if(confirm("Are you sure you want to delete: " + item.task.taskName)) {
                                    deleteTask(item.id)
                                    setAllTasks(allTasks.filter((val)=> {
                                        return val.id != item.id
                                    }))
                                }
                            }}>Delete Task</button>
                            
                        </div>
                    ))
                }
                </ul>
            </div>
            <TaskForm taskAddEvent={(taskName, taskDesc)=> {
                addTask(user.uid, taskName, taskDesc).then(() => {
                    getTasks(user.uid).then((tasks) => setAllTasks(tasks))
                })
            }}></TaskForm>
        </>
    )

    function getRandomTask() {
        if(allTasks.length != 0) {
            return allTasks[Math.floor(Math.random() * allTasks.length)]
        }
    }
}