import './Cart.css';

const Cart = ({ cart}) => {

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;