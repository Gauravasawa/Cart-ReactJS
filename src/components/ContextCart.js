import React, { useContext } from "react";
import Items from "./Items";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmt } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="navbar-shopping">
            <FaArrowLeft className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <FaShoppingCart className="shopping-cart-icon" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem}</span>
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="navbar-shopping">
          <FaArrowLeft className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <FaShoppingCart className="shopping-cart-icon" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span>
          items in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((currentItem) => {
                return <Items key={currentItem.id} {...currentItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total: <span>{totalAmt} ₹</span>
          </h3>
          <button>Procced To Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
