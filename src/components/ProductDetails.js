import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clickFunction } from './Home/clickFunction';

class ProductDetails extends Component {
  constructor() {
    super();

    this.renderProductDetails = this.renderProductDetails.bind(this);

    this.state = {
      productInfo: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const results = await response.json();
    this.setState({ productInfo: results });
  }

  renderProductDetails = () => {
    const { productInfo } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{productInfo.title}</p>
        <p>
          {productInfo.price}
          {' '}
          reais
        </p>
        <img src={ productInfo.thumbnail } alt={ productInfo.name } />
      </div>
    );
  }

  render() {
    const { clickFunction, renderProductDetails } = this.props;

    renderProductDetails();
    return (
      <label>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ clickFunction }
          type="submit"
        />
      </label>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf,
  clickFunction: PropTypes.func,
  renderProductDetails: PropTypes.func,
}.isRequired;

export default ProductDetails;
