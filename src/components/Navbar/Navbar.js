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
      <div className="navbar-brand">
        <Link to="/">Shop</Link>
      </div>
      <div className="navbar-links">
        <Link to="/auth" className="auth-link">Login / Sign Up</Link>
        <Link to="/cart" className="cart-link">
          Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



