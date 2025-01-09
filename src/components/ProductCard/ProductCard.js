import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const cartContext = useCart();
  console.log('Cart Context:', cartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Add to cart clicked for product:', product);
    
    if (!cartContext.addToCart) {
      console.error('addToCart function is not available in context');
      return;
    }
    
    try {
      cartContext.addToCart(product);
      console.log('Product added to cart successfully');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <div className="rating">
            <span>★ {product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>
        </div>
      </Link>
      <button 
        className="add-to-cart-button"
        onClick={handleAddToCart}
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;


