import React, { Component } from 'react';

class ShopCart extends Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>

    );
  }
}

export default ShopCart;
