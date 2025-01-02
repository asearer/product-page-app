import React, { useState } from "react";
import { useCart } from "../../context/CartContext"; 
import "../ProductCard/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      {/* Show the modal on hover */}
      {isHovered && (
        <div className="product-info-modal">
          <h3>Product Details</h3>
          <p>{product.description}</p>
        </div>
      )}

      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;


