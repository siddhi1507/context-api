import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import '../style.css';  // Updated path

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    clearCart();
    navigate('/');
  };

  return (
    <div className="container payment-page">
      <h1>Payment Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <form onSubmit={handlePayment} className="payment-form">
        <label>Card Number:</label>
        <input type="text" placeholder="Enter your card number" required />
        <label>Expiry Date:</label>
        <input type="text" placeholder="MM/YY" required />
        <label>CVV:</label>
        <input type="text" placeholder="CVV" required />
        <button type="submit">Pay Now</button>
      </form>
      <button onClick={() => navigate('/cart')}>Return to Cart</button>
    </div>
  );
};

export default Payment;
