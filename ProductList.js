import React from 'react';
import Product from './Product';

const productData = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: 120,
    image: 'https://via.placeholder.com/150?text=Nike+Air+Max'
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: 180,
    image: 'https://via.placeholder.com/150?text=Adidas+Ultraboost'
  },
  {
    id: 3,
    name: 'Puma RS-X',
    price: 110,
    image: 'https://via.placeholder.com/150?text=Puma+RS-X'
  },
  {
    id: 4,
    name: 'Reebok Classic',
    price: 90,
    image: 'https://via.placeholder.com/150?text=Reebok+Classic'
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {productData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
