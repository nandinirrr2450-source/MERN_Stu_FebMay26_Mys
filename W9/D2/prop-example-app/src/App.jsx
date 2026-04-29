import { useState } from 'react'
import { PropBasics} from "./components/p1.jsx"
import {PropDestructuring} from "./components/p2.jsx"
import {PropsChildren} from "./components/p3.jsx"
import { PropDrillingDemo } from "./components/p4.jsx"
import { SharedStateParent } from "./components/p5.jsx"
import { CompositionDemo } from "./components/p6.jsx"
import './App.css'

function App() {

  return (
    <>
        {/* < PropBasics/> */}
        {/* <PropDestructuring/> */}
        {/* <PropsChildren/> */}
        {/* <PropDrillingDemo/> */}
        {/* <SharedStateParent/> */}
        <CompositionDemo/>
    </>
  )
}

export default App
