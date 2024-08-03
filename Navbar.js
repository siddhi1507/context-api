import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';  // Updated path

const Navbar = () => {
  return (
    <nav>
      <h2>Shoe Store</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
