import './App.css'
import TaskList from './components/tasklist'
import {useNavigate} from "react-router-dom"

export default function TaskListPage() {
    const navigate = useNavigate();

  return (
    <div style={{width: 800, display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10}}>
      <button onClick={()=> navigate("/dashboard")}>Back Home</button>
      <TaskList></TaskList>
    </div>
  )

  
}

