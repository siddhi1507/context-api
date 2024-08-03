import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      )}
    </div>
  );
};

export default ShoppingCart;
