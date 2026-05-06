// Event handling with state
import { useState } from "react";

// In react:
//  events use camelCase naming, eg: onClick, onChange
export function EventHandlingState(){
    const [name, setName] = useState('');
    const [age,setAge]=useState('')

    const handleNameChange = (e) =>{
        setName(e.target.value);
    };

    const handleClick = () =>{
        alert(`Hello, ${name || 'Guest'}`);
    };

    const handleAgeChange = (e) =>{
        setAge(e.target.value)
    }

    return(
        <>
            <h2>Event Handling with state</h2>
            <input type="text" value={name}
            onChange = {handleNameChange}
            placeholder = "Enter your name" />

            
            <input type="number" value={age}
            onChange = {handleAgeChange}
            placeholder = "Enter your age" />

            <button onClick={handleClick}>Greet User</button>
            <p>Current input: {name}</p>
            <p>Current input: {age}</p>
        </>
    )

}