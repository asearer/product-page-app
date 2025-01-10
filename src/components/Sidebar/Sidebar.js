// src/components/Sidebar/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterChange = () => {
    const filters = {
      category,
      priceRange,
      rating
    };
    console.log('Sidebar - Sending filters:', filters); // Debug log
    onFilterChange(filters);
  };

  const handleReset = () => {
    console.log('Sidebar - Resetting filters'); // Debug log
    setCategory('');
    setPriceRange('');
    setRating('');
    onFilterChange({
      category: '',
      priceRange: '',
      rating: ''
    });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    console.log('Category changed to:', value); // Debug log
    setCategory(value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    console.log('Price range changed to:', value); // Debug log
    setPriceRange(value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    console.log('Rating changed to:', value); // Debug log
    setRating(value);
  };

  return (
    <div className="sidebar">
      <h3>Filter Products</h3>

      <div className="filter-section">
        <label>Category</label>
        <select 
          value={category} 
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Price Range</label>
        <select 
          value={priceRange} 
          onChange={handlePriceChange}
        >
          <option value="">All Prices</option>
          <option value="0-25">Under $25</option>
          <option value="25-50">$25 to $50</option>
          <option value="50-100">$50 to $100</option>
          <option value="100-500">Over $100</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Minimum Rating</label>
        <select 
          value={rating} 
          onChange={handleRatingChange}
        >
          <option value="">All Ratings</option>
          <option value="4">4★ & Up</option>
          <option value="3">3★ & Up</option>
          <option value="2">2★ & Up</option>
          <option value="1">1★ & Up</option>
        </select>
      </div>

      <div className="filter-buttons">
        <button 
          className="apply-filters-btn"
          onClick={handleFilterChange}
        >
          Apply Filters
        </button>
        <button 
          className="reset-filters-btn"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
