import React from "react";
import { FaHome, FaWhatsapp,FaShoppingCart  } from "react-icons/fa";
export default function App15() {
  return (
    <div>
      <h3>This is App15</h3>
      <div>
        <FaHome size={15} />
        Home
        <FaWhatsapp size={15} />
        Contact
        <FaShoppingCart size={15}/>
        Cart
      </div>
    </div>
  );
}