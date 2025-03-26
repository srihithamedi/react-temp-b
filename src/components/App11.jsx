import React from 'react'
import { useState, useRef } from 'react'
export default function () {
  const [msg, setMsg] = useState("Hello World")
  const [color, setColor] = useState();
   const msgRef = useRef();
   const handlecolor = ()=>{
    msgRef.current.style.color = color
   };
  return (
    <div>
      <div>
        <p><input type="text" onChange={(e)=>{setColor(e.target.value)}} ></input></p>
      </div>
      <button onClick={handlecolor}>submit</button>
      <div  ref={msgRef}>
          {" "}
          {msg}
        </div>
    </div>
  )
}
