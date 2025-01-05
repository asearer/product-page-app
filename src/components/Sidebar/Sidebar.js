// src/components/Sidebar/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, priceRange, rating });
  };

  return (
    <div className="sidebar">
      <h3>Filter Products</h3>

      <div className="filter-section">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} onBlur={handleFilterChange}>
          <option value="">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Price Range</label>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} onBlur={handleFilterChange}>
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-1000">$200+</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} onBlur={handleFilterChange}>
          <option value="">All</option>
          <option value="1">& Up</option>
          <option value="2">& Up</option>
          <option value="3">& Up</option>
          <option value="4">& Up</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
