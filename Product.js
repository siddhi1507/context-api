import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../style.css';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
