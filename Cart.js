import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../style.css';  // Updated path

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
      )}
    </div>
  );
};

export default Cart;
