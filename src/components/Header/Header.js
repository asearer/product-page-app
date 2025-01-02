import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => (
  <header className="header">
    <h1 className="header-title">eCommerce App</h1>
    <nav className="header-nav">
      <Link to="/" className="header-link">Products</Link> | 
      <Link to="/checkout" className="header-link">Checkout</Link>
    </nav>
  </header>
);

export default Header;

