import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {ManagingApiState} from "./components/P1"
import {UseEffectLifeCycle} from "./components/P2"
import {AxiosLifecycle} from "./components/P3"
import {CRUDOperation} from "./components/P4"
import {PaginationCaching} from "./components/P5"
import {UploadErrorBoundary} from "./components/P6"
import './App.css'

function App() {


  return (
    <>
      {/* <ManagingApiState /> */}
      {/* <UseEffectLifeCycle/> */}
      {/* <AxiosLifecycle/> */}
      {/* <CRUDOperation/> */}
      {/* <PaginationCaching/> */}
      <UploadErrorBoundary/>
    </>
  )
}

export default App
