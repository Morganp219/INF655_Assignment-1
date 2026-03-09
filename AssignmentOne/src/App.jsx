import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'
import UserInfo from './components/userinfo'
import TaskForm from './components/TaskForm'
import TaskList from './components/tasklist'

function App() {
  const handleClick = () => {
    alert("Hello User!")
  }

  return (
    <div style={{width: 800, display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10}}>
      <Greeting username={"Morgan"}></Greeting>
      <Greeting username={"John"}></Greeting>


      <UserInfo handleClick={handleClick}></UserInfo>
      <TaskList></TaskList>
    </div>
  )

  
}

export default App
