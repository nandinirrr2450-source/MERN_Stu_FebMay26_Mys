import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {EventBasics} from "./components/p1.jsx"
import {EventObject} from "./components/p2.jsx"
import {PassingArguments} from "./components/p3.jsx"
import {UseCallbackEvents} from "./components/p5.jsx"

function App() {
  

  return (
    <>
      {/* <EventBasics/> */}
      {/* <EventObject/> */}
      {/* <PassingArguments/> */}
      <UseCallbackEvents/>
    </>
  )
}

export default App
