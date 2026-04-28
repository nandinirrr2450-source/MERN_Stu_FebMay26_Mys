import React from 'react';
function Welcome(props){
    //Child component : reusable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional components Basics</h2>
            {/*We are passing "Nandini" as props Welcome function recieves is as {name:"Nandini*/}
            <Welcome name="Nandini" />
            {/*We are passing "Nandini" as props Welcome function recieves is as {name:"Nandini*/}
            <Welcome name="Developer" />
        </div>
    )
}