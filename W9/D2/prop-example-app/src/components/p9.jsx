//Props vs State
//Props: data passed from parent to child component
//data comes from outside the component
//are read-only
//used for passing data b/w components
//State: data managed inside a component
//belongs to component itself
//can be modified / changed
//setter method is used to modify data

import { useState } from "react"

function Child({title}){
    return <p>Props: {title}</p>
}

export function PropState(){
    const [stateValue,setStateValue]=useState('Local State')
    return (
        <>
        <h3>Props v/s State</h3>
        <Child title={"Parent data"}/>

        <p>State: {stateValue}</p>
        <button onClick={()=>setStateValue('This is New')}>Update state</button>
        </>
    )
}