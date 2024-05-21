import './Cart.css';

const Cart = ({ cart, RemoveFromCart}) => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

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
       <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;