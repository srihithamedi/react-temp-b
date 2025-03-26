import React from 'react'
import { useState } from "react";
import "./App7.css"
export default function App7() {
  const [products,setProducts] = useState([]);
    const [product,setProduct] = useState();
    const handleSubmit = () => {
      setProducts([...products, product]);
    };
  return (
    <div className='App-Row'>
        <div>
            <h3>Billing Form</h3>
           <p> <input type='text' placeholder='Enter Product name' onChange={(event) => setProduct({...product,name: event.target.value})}></input></p>
           <p><input type='number' placeholder='Enter Product price' onChange={(event) =>setProduct({...product,price: event.target.value})}></input></p>
           <p><input type=" number" placeholder='Enter Quantity' onChange={(event) => setProduct({...product,quantity: event.target.value})}></input></p>
           <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
        <h4>Items</h4>
        <table border="1">
          {products &&
            products.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
                <td>{value.price*value.quantity}</td>
              </tr>
            ))}
        </table>
        </div>
    </div>
  )
}
