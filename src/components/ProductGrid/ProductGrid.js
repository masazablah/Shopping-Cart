import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css';

const ProductGrid = ({ products, AddToCart}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} AddToCart={AddToCart}/>
      ))}
    </div>
  );
};

export default ProductGrid;