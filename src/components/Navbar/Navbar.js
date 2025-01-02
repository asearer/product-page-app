import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../App"; 
import "../Navbar/Navbar.css"; 

const Navbar = () => {
  const { cartItems } = useCart();

  // Count total items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">Home</Link>
      </div>
      <div className="navbar-center">
        <Link to="/cart" className="navbar-link">Cart ({cartItemCount})</Link>
      </div>
      <div className="navbar-right">
        <Link to="/checkout" className="navbar-link">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;


