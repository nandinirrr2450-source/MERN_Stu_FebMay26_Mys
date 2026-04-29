//container or wrapper component
import { React }from "react";
//children is a special React prop 
//It holds nested JSX passed between component tags
//It can also helps to create reusable wrapper/layout components
function Container({children}){
    return (
        <div className="card">
            {children}
        </div>
    )
}
//Parent component
export function PropsChildren(){
    return(
        <>
        <Container>  {/* Container is a inbuilt keyword*/}
            <h3>First child element in nested approach</h3>
        </Container>
        </>
    )
}