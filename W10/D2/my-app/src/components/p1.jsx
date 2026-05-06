//useContext hook
//Context: lets you share data between components without passing props manually through every level 

import { createContext , useContext, useState } from "react";

//creating a context
const ThemeContext=createContext()

//child component 1 
function Header(){
    const theme=useContext(ThemeContext)
    //for inline css we use double flower braces
    return (
        <header style={{
            padding:'20px',
            marginTop:'20px',
            background: theme ==='dark'?'#222':'#eee',
            color: theme ==='dark'?'#fff':'#000'
        }}>
            <h3>Header Component</h3>
            <p>Current theme from Context: {theme}</p>

        </header>
    )
}

//child component 2
function Content(){
    const theme=useContext(ThemeContext)
    return(
        <div style={{
            padding:'20px',
            marginTop:'20px',
            background: theme ==='dark'?'#333':'#f9f9f9',
            color: theme ==='dark'?'#fff':'#000'
        }}>
            <p>This component also uses the same context value</p>
        </div>
    )
}

function Layout(){
    return(
        <div>
            <Header/>
            <Content/>
        </div>
    )
}

export function UseContextIntro(){
    //shared state
    const [theme,setTheme]=useState('light')

    const toggleTheme=()=>{
        setTheme(theme==='light'?'dark':'light')
    }
    return(
        <section>
            <h2>UseContext Example via theme</h2>
            <p>Example to show the usage of context sharing</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value={theme}>
                <Layout/>
            </ThemeContext.Provider>
        </section>
    )
}

