import React from 'react'
import { useState } from "react";

export default function App8() {
  const [detail,setDetail] = useState([]);
    const [user,setUser] = useState();
    const handleSubmit = () => {
      setDetail([...detail, user]);
    };
  return (
    <div className='App-Row'>
        <div>
            <h3>Registration Form</h3>
           <p> <input type='text' placeholder='Enter name' onChange={(event) => setUser({...user,name: event.target.value})}></input></p>
           <p><input type='text' placeholder='Enter add' onChange={(event) =>setUser({...user,add: event.target.value})}></input></p>
           <p><input type=" text" placeholder='Enter password' onChange={(event) => setUser({...user,password: event.target.value})}></input></p>
           <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
        <h4>Items</h4>
        <table border="1">
          {detail &&
            detail.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.add}</td>
                <td>{value.password}</td>
              </tr>
            ))}
        </table>
        </div>
    </div>
  )
}
