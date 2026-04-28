import React, {Component} from "react";

export class ClassComponentsBasics extends Component{
    //1.class extends React.Component
    //state,lifeCycle methods ,props,setState()

    render(){
        //render(): returns jsx describing what to show
        //called whenever component needs to update
        return(
            <>
            <h2>Class Components</h2>
            <p>Class components use render() and support lifeCycle methods</p>
            </>
        )
    }
}