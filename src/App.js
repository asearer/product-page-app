import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Auth from './components/Auth/Auth';
import Footer from "./components/Footer/Footer";
import { fetchProducts } from "./components/api";
import './App.css';
import { CartProvider } from './context/CartContext';
import Contact from './components/Contact/Contact';
import { UserProvider } from './context/UserContext';

// Wrapper component to handle the layout and routing
const AppContent = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

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
    console.log('Applying filters:', filters);
    let filtered = [...products];

    if (filters.category && filters.category !== '') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    if (filters.priceRange && filters.priceRange !== '') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    if (filters.rating && filters.rating !== '') {
      filtered = filtered.filter(product => 
        product.rating.rate >= Number(filters.rating)
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="app-container">
      {location.pathname === '/' && (
        <Sidebar onFilterChange={handleFilterChange} />
      )}
      <div className="main-content">
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <AppContent />
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;





