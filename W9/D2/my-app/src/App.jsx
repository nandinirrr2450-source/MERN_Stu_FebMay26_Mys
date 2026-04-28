import { useState } from 'react'
import './App.css'
import { FunctionName } from './components/FunctionalCompOne.jsx'
import {FunctionalComponentsBasics} from './components/FunctionalComponentsBasics.jsx'
import {ClassComponentsBasics} from './components/ClassComponentsBasics.jsx'
import {FunctionComp} from './components/FunctionalComponentAdv.jsx'

function App() {

  return (
    //Fragment means act like parent tag as like div instead of using div we can use this as parent tag in react <>... </>
    <>
      {/* <FunctionName/>{/*component Name*/}
      {/* <FunctionalComponentsBasics/> //component Name */}
      {/* <ClassComponentsBasics/> */}
      <FunctionComp/>
      
    </>
  )
}

export default App
