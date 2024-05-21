import ProductGrid from './components/ProductGrid/ProductGrid';
import './App.css';
import React, { useState } from 'react';
import Cart from './components/Cart/Cart'

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Beauty Blender, and powder puff', image: 'images/bb1.jpg', price: 10 },
    { id: 2, name: 'Face Razor', image: 'images/bb2.jpg', price: 20 },
    { id: 3, name: 'Florence Makeup Removal', image: 'images/download (4).jpg', price: 20 },
    { id: 4, name: 'Huda Beauty Concealer', image: 'images/hbconceler.jpg', price: 20 },
    { id: 5, name: 'Fenty Beauty Lip Gloss', image: 'images/lips4.jpg', price: 20 },
    { id: 6, name: 'Florence Maskara', image: 'images/maskara.jpg', price: 20 },
  ];

  const AddToCart = (product) => {
    setCart([...cart, product]);
  };

  const RemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <ProductGrid products={products}  AddToCart={AddToCart} />
      <Cart cart={cart} RemoveFromCart={RemoveFromCart}/>
    </div>
  );
};

export default App;