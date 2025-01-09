import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaHome, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa"; // Importing icons from react-icons
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          <FaHome size={24} />
          <span>Home</span>
        </Link>
      </div>
      <div className="navbar-center">
        <Link to="/cart" className="navbar-link">
          <FaShoppingCart size={24} />
          <span>Cart ({cartItemCount})</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/checkout" className="navbar-link">
          <FaMoneyBillWave size={24} />
          <span>Checkout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



