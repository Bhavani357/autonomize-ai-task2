// components/ProductGrid.js
import React, { Component } from 'react';
import ProductCard from '../ProductCard';

class Products extends Component {
  render() {
    const { products, onProductSelect } = this.props;

    return (
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductSelect(product.id)} />
        ))}
      </div>
    );
  }
}

export default Products;
