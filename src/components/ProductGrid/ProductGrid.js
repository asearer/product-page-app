import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  console.log('ProductGrid - Received products:', products); // Debug log

  if (!products || products.length === 0) {
    return <div className="no-products">No products found matching your criteria.</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

