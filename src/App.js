// App.js
import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

class App extends Component {
  state = {
    products: [],
    selectedProduct: null
  };

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  handleProductSelect = (productId) => {
    const selectedProduct = this.state.products.find(product => product.id === productId);
    this.setState({ selectedProduct });
  };

  handleBackButtonClick = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { products, selectedProduct } = this.state;

    return (
      <div className="App">
        <h1 className='heading'>Fake Store</h1>
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} onBackButtonClick={this.handleBackButtonClick} />
        ) : (
          <Products products={products} onProductSelect={this.handleProductSelect} />
        )}
      </div>
    );
  }
}

export default App;
