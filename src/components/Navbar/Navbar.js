import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useUser();

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Shop</Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <span className="welcome-text">
              Welcome, {user.name}
              {user.isAdmin && ' (Admin)'}
            </span>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="nav-link">Login</Link>
        )}
        <Link to="/cart" className="cart-link">
          Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



