import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {UseContextIntro} from './components/p1.jsx'
import {CustomHooksIntro} from './components/p2.jsx'
import {UserRefIntro} from './components/p3.jsx'

function App() {
  return(
    <>
        {/* <UseContextIntro/> */}
        {/* <CustomHooksIntro/> */}
        <UserRefIntro/>
    </>
  )
}

export default App
