//Accessibility for custom Clickable elements
//to make non-button element behave like a accessible button

export function Accessibility(){
    const handleClick = ()=>{
        alert('Custom button clicked')
    }
    return(
        <section>
            <h2>Accessibility</h2>
            <div role="button" onClick={handleClick} tabIndex={0} style={{padding: '20px',backgroundColor:'pink'}} >
                Custom Accessibile Button
            </div>

            <button onClick={handleClick} >Real button</button>
        </section>
    )
}