//React Event Object
//What is it ?

import { useState } from "react";

export function EventObject(){
    const [text,setText]=useState('')

    const handleChange=(event)=>{
        const currentValue=event.target.value 
        console.log(currentValue)

        setText(currentValue)
    }
    return(
        <section>
            <h2>Event object</h2>
            <input type="text" value={text} onChange={handleChange} placeholder="Type something"/>
            <p>user types: {text}</p>
        </section>
    )
}