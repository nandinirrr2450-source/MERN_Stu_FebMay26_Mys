//Basic event concepts in react
//What is an event?
//an action triggered by the user

export function EventBasics(){
    //Declaring a event handler function
    const handleClick=()=> alert("Clicked")

    return(
        <section>
            <h2>Basics Events</h2>
            {/* Event binding */}
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}