import React,{useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart]=useState(false)
  const [addToCart, setaddToCart]= useState(false)

  const cartModes=addToCart? 'Add to Cart' : 'Remove From Cart'
  const listClass = inCart? "in-cart" :""

  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  onClick={() => {
      setaddToCart(!addToCart)
      setInCart(!inCart)}}> {cartModes}</button>
    </li>
  );
}

export default Item;
