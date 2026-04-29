//Props Destructuring
//a syntax of ES6 approach that allow us to unpack properties from props
//prop object directly into its values
import React from "react";

function UserProfile({username,skill}){
return(
    <div>
        <p>User: {username}</p>
        <p>Skill: {skill}</p>
    </div>
    )
}

//parent component
export function PropDestructuring(){
    return(
        <>
        <h2>PropDestructuring</h2>
        <UserProfile username="Nandini" skill="React" />
        </>
    )
}