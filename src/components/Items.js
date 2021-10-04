import React, { useContext } from "react";
import {  FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="product_img" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <FaMinus className="fas fa-minus minus" onClick={()=> decrement(id)} />
          <input type="text" name="" id="" placeholder={quantity} />
          <FaPlus className="fas fa-plus add" onClick={() => increment(id)} />
        </div>
        <div className="price">
          <h3>{price} rs</h3>
        </div>

        <div className="remove-item">
          <AiFillDelete
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items
