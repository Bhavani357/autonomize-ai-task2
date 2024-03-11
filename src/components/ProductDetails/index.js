// components/ProductDetails.js
import React from 'react';
import './index.css'

const ProductDetails = ({ product, onBackButtonClick }) => {
  return (
    <div className="product-details">
      <h2 className='product-heading'>{product.title}</h2>
      <div className='product-container'>
        <img src={product.image} alt={product.title} className='product-image'/>
        <div className='product-description-container'>
          <p className='product-description'>{product.description}</p>
          <p className='product-price'>${product.price}</p>
        </div>
      </div>
      <button onClick={onBackButtonClick} className='back-button'>Back</button>

    </div>
  );
};

export default ProductDetails;
