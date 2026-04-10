import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from "./components/login"
import Signup from "./components/signup"
import Dashboard from "./dashboard"
import {useAuth} from "./UserContext"
import ProtectedRoute from './components/protected'
import TaskListPage from './tasklistpage'

function App() {
  const {logout, user} = useAuth()
  const handleClick = () => {
    alert("Hello User!")
  }

  return (
    <BrowserRouter>
        <div>
          {
            user ? <button onClick={()=>{
            logout()
          }}>Logout</button> : <></>
          }
        </div>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>}></Route>
          <Route path="/tasklist" element={<ProtectedRoute><TaskListPage></TaskListPage></ProtectedRoute>}></Route>

        </Routes>
    </BrowserRouter>
  )

  
}

export default App
