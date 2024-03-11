// components/ProductCard.js
import React from 'react';
import './index.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} className='image'/>
      <h3 className='heading3'>{product.title}</h3>
      <p className='price'>${product.price}</p>
    </div>
  );
};

export default ProductCard;
