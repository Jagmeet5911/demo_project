import { useState } from 'react'

import './App.css'

function App() {
 
 const[color,setColor] = useState("grey");

 function changeColor(color){
    setColor(color)
 }

 document.body.style.background = color

  return (
    <>
  
      <div className="bgchanger" style={{display:"flex", gap:"15px"}}>
        <div className="red" ><button onClick={()=>{changeColor("red")}} style={{backgroundColor:"red"}}>Red</button></div>
        <div className="blue"><button onClick={()=>{changeColor("blue")}} style={{backgroundColor:"blue"}}>blue</button></div>
        <div className="purple"><button onClick={()=>{changeColor("purple")}} style={{backgroundColor:"purple"}}>purple</button></div>
        <div className="orange"><button onClick={()=>{changeColor("orange")}} style={{backgroundColor:"orange"}}>orange</button></div>
      </div>
       
    </>
  )
}

export default App
