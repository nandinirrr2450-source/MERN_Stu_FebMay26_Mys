import { useState } from "react";

//passing arguments to event handlers
export function PassingArguments(){
    const [message,setMessage]=useState('No message yet')

    //Event handler function
    const handleClick = (msg)=>{
        setMessage(msg)
    }
    return(
        <section>
            <h2>Passing Arguments</h2>
            <button onClick={()=>handleClick("Namaste")}>
                {/* onClick={handleClick("Namaste")}  not allowed to do like this always it should call by function */}
                Click me
            </button>
            <p>Message: {message}</p>
        </section>
    )
}