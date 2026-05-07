//stop event propagation
export function EventObj(){
    const handleParentClick = (event)=>{
        alert(`Parent clicked target: ${event.target.tagName} currentTarget:${event.currentTarget.tagName}`)
    }

    const handleChildClick = (event)=>{
        event.stopPropagation()
        alert(`Child clicked (Propogation stopped) target: ${event.target.tagName} currentTarget:${event.currentTarget.tagName}`)
    }

     //form submit handler
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert("Form submitted safely by preventing default refresh")
    }

    const handleBoxClick = (event) =>{
        alert(`Box clicked  target: ${event.target.tagName} currentTarget:${event.currentTarget.tagName}`)
    }

    return(
        <section onClick={handleParentClick}
        style={{padding: '20px',backgroundColor:'yellow'}}>
            <h2>Event Object</h2>
            <button onClick={handleChildClick} >Child button</button>
            <button onClick={handleSubmit} >Submit form</button>

            <div onClick={handleBoxClick}
            style={{padding:'20px' , backgroundColor: 'red'}}>
                <span style={{padding:'20px' , backgroundColor: 'green', display:'inline-block'}}>

                </span>

            </div>
        </section>
    )
}