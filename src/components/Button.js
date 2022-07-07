import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { clickFunction } = this.props;
    return (
      <button
        data-testid="shopping-cart-button"
        type="submit"
        onClick={ clickFunction }
      >
        clique aqui
      </button>

    );
  }
}

Button.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default Button;
