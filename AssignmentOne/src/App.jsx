import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/greeting'
import UserInfo from './components/userinfo'

function App() {
  // AI Generated Tasks.
  let tasks = [
    "Finish project documentation",
    "Review pull requests",
    "Prepare lecture materials",
    "Update server monitoring dashboard"
]


  return (
    <div>
      <Greeting></Greeting>
      <UserInfo></UserInfo>
      <h3>{getRandomTask()}</h3>
    </div>
  )

  function getRandomTask() {
    return tasks[Math.floor(Math.random() * tasks.length)]
  }
}

export default App
