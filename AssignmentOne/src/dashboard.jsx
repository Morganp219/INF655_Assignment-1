import './App.css'
import Greeting from './components/greeting'
import { useAuth } from './UserContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Hello User!")
  }

  return (
    <div style={{width: 800, display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10}}>
      {/* Hidden for UI sakes */}
      <Greeting username={"User!"}></Greeting>
      <button onClick={()=> navigate("/tasklist")}>View Todo List</button>
    </div>
  )

  
}

