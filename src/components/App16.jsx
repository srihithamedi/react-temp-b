import React from 'react'
import { useRef } from 'react';
export default function App16() {
    let numRef=useRef();
    const handleSub=()=>{
        let num=numRef.current.value;
        if(num>18)
            alert("Welcome")
        else{
            alert("bye")
        }
    }
  return (
    <div>
        <h3>This is app16</h3>
        <p><input type='number' ref={numRef}/></p>
        <button onClick={handleSub}>submit </button>
        </div>
  )
}
