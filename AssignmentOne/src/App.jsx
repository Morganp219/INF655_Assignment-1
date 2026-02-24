import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'
import UserInfo from './components/userinfo'
import TaskForm from './components/TaskForm'

function App() {
  // AI Generated Tasks.
  let tasks = [
    "Finish project documentation",
    "Review pull requests",
    "Prepare lecture materials",
    "Update server monitoring dashboard",
    "Refactor CSS to Tailwind CSS"
]
  const handleClick = () => {
    alert("Hello User!")
  }

  return (
    <div>
      <Greeting username={"Morgan"}></Greeting>
      <Greeting username={"John"}></Greeting>


      <UserInfo handleClick={handleClick}></UserInfo>
      <h3>{getRandomTask()}</h3>
      <div>
        <ul>
          {
            tasks.map((task)=> (
              <li style={{textAlign: "start"}} key={task}>{task}</li>
            ))
          }
        </ul>
      </div>
      <TaskForm></TaskForm>
    </div>
  )

  function getRandomTask() {
    return tasks[Math.floor(Math.random() * tasks.length)]
  }
}

export default App
