import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import { fetchProducts } from "./components/api";
import './App.css';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && (!max || product.price <= max));
    }
    if (filters.rating) {
      filtered = filtered.filter(product => product.rating.rate >= parseInt(filters.rating));
    }

    setFilteredProducts(filtered);
  };

  if (error) {
    return <div className="error-message">Error loading products: {error}</div>;
  }

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="app-container">
          <Sidebar onFilterChange={handleFilterChange} />
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? (
                  <div className="loading">Loading products...</div>
                ) : (
                  <ProductGrid products={filteredProducts} />
                )
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;





