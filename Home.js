import React from 'react';
import ProductList from './ProductList';
import '../style.css';  // Updated path

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Shoe Store</h1>
      <ProductList />
    </div>
  );
};

export default Home;
