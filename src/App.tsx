import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { Navbar } from './components/Navbar'
import {About} from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>
      <div className="w-screen h-screen flex flex-col bg-sky-950 ">
        <Navbar />
        {<About />}
      </div>
    </div>
  )
}

export default App
