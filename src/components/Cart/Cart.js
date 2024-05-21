import './Cart.css';
import React, { useState } from 'react';

const Cart = ({ cart, RemoveFromCart}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const TotalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = (e) => {
        e.preventDefault();
        console.log('Order submitted', { name, email, cart });
        alert('Order submitted successfully!');
    };    

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => RemoveFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
       <h3>Total Amount: ${TotalAmount.toFixed(2)}</h3>
       <form onSubmit={handleCheckout}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Cart;