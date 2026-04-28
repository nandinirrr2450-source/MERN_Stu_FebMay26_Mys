//Props Destructuring
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