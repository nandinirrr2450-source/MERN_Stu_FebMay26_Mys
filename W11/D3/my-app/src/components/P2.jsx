import { useEffect, useState } from "react";

//useEffect lifeCycle
// no array: every render
// []=>once
// [state]=>on mount=>when state changes

export function UseEffectLifeCycle(){
    const [count , setCount]=useState(0)

    //1.No dependency array
    useEffect(()=>{
        console.log("Effect 1: runs after every render")
    })

    //2.Empty dependency array ,[]=>this is dependency array
    // This runs only onces after the component mounts or value is zero
    useEffect(()=>{
        console.log("Effect 2: runs only once after mount")
    },[])

    // 3.Dependency based effect
    useEffect(()=>{
        console.log("Effect 3: count change to ",count)

        return()=>{
            console.log("cleanUp for effect 3: previous count:",count)
        }
    },[count])

    // Event handler
    function handleIncrement(){
        setCount((prevCount)=>prevCount+1)
    }

    function handleReset(){
        setCount(0)
    }
    return(
        <section>
            <h2>useEffect LifeCycle</h2>
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )
}