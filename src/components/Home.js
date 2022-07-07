import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  clickFunction = () => {
    const { history } = this.props;
    history.push('/shopcart');
  }

  emptyListMessage() {
    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Button clickFunction={ this.clickFunction } />
      </>
    );
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.length === 0 && this.emptyListMessage() }
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf,
}.isRequired;

// pair programing: Tales Rodrigues, Joice Araújo
export default Home;
