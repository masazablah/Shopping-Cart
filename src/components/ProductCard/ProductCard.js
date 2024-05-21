import React from 'react';
import './ProductCard.css';
import AddToCartIcon from '../add-to-cart.png'

const ProductCard = ({ product}) => {
  return (
    <div className="product-card" >
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-button" >
            <img src={AddToCartIcon} alt="Add to Cart" className="cart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;