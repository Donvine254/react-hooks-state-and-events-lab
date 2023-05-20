import React, { useState } from "react";

function Item({ name, category }) {
  const [isPurchased, setIsPurchased] = useState(false);
  const Class = isPurchased ? "in-cart" : "";
  const BtnClass = isPurchased ? "remove" : "add";
  const BtnText = isPurchased ? "Remove from Cart" : "Add to Cart";
  function handlePurchase() {
    setIsPurchased(!isPurchased);
  }
  return (
    <li className={Class}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={BtnClass} onClick={handlePurchase}>
        {BtnText}
      </button>
    </li>
  );
}

export default Item;
