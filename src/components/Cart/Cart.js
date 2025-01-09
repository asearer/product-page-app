import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity || 1}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                  <button 
                    onClick={() => deleteFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove Item
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

