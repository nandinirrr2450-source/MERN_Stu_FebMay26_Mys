//Custom hooks
//Its a normal js function that uses React hooks inside it
//inside it. Its name must start with "use" 
//useEffect => used to render when there any changes is done

import { useEffect, useState } from "react";

//Document  title changer : Custom hook which updates the browser tab title whenever the given title changes
export function UseDocumentTitle(title){
    useEffect(()=>{
        document.title=title;

        return()=>{
            document.title='My react app'
        }
    },[title])
}

//custom hook: manages a boolean value and provide a reusable toggle function
function UseToggle(initialValue=false){
    const [value,setValue]=useState(initialValue)

    const toggle=()=>{
        setValue((prev)=>!prev)
    }
    return [value,toggle]
}

export function CustomHooksIntro(){
    const [count,setCount]=useState(0)

    const [isVisible,toggleVisible]=UseToggle(true)

    return(
        <section>
            <h2>Custom hooks Introduction</h2>
            <div style={{marginBottom:'10px'}}>
                <h3>Counter Example</h3>
                <p>Count: {count}</p>
                <button onClick={()=>setCount((prev)=>prev+1)}>Increment count</button>
            </div>

            <div style={{marginBottom:'10px'}}>
                <h3>Toggle Example</h3>
                <button onClick={toggleVisible}>
                    {isVisible?'Hide Message':'Show Message'}
                </button>
                {isVisible && (
                    <p>This visibility is controlled by a custom hook</p>
                )}
            </div>
        </section>
    )
}