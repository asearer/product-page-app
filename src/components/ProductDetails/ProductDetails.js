import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>

      {/* Product Info Modal */}
      <div className="product-info-modal">
        <h3>Product Details</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;


