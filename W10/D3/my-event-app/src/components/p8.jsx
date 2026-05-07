import { useState } from "react";

//Keyboard events in react
export function KeyboardEvent(){
    //creates a state
    const [text,setText]=useState('')
    const [action,setAction]=useState('No Action Yet')

    //input handler
    const handleChange = (event) =>{
        setText(event.target.value)
    }
    //Keyboard event handler
    const handleKeyDown = (event)=>{
        if(event.key ==='Enter'){
            setAction(`Submitted : ${text}`)
        }
        if(event.key ==='Escape'){
            setText('')
            setAction('Input cleared')
        }
    }

    return(
        <section>
            <h2>Keyboard Events</h2>
            <label htmlFor="nameInput">Type Something</label>
            <input type="text" value={text} id="nameInput" onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Press Enter or ESC"/>
            <p>Current Input : {text}</p>
            <p>Current Action : {action}</p>
            <button onClick={()=>setAction('Button Clicked')}>Submit Button</button>
        </section>
    )
    
}