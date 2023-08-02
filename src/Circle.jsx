import {createContext, useContext, useState} from "react";
import './circle.css'

const CircleContext = createContext('')
export default function Circle() {
    const [color,setColor]= useState('')
    return(
        <CircleContext.Provider value={color}>
            <div className='wrapper'>
                <ChangeColor/>
                <input onChange={(e)=>setColor(e.target.value)}  type="text" placeholder='Enter color' value={color}/>
            </div>
        </CircleContext.Provider>
    )
}

function ChangeColor(){
    const colors = useContext(CircleContext)
    return(
        <div className='circle' style={{backgroundColor: `${colors}`}}>
            <span>{colors}</span>
        </div>
    )
}

