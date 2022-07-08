import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { clickFunction, buttonText } = this.props;
    return (
      <button
        data-testid="shopping-cart-button"
        type="submit"
        onClick={ clickFunction }
      >
        {buttonText}
      </button>

    );
  }
}

Button.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
