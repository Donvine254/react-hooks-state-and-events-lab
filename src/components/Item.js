import React,{useState} from "react";

function Item({ name, category }) {
  const[isPurchased, setIsPurchased]=useState(false);
  const Class= !isPurchased?"":"in-cart";
  function handlePurchase(){
    setIsPurchased(!isPurchased);
  }
  return (
    <li className={Class}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlePurchase}>{!isPurchased? "Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;
