import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Button from './Button';

class Home extends Component {
  constructor() {
    super();

    this.searchProducts = this.searchProducts.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.renderCategories = this.renderCategories.bind(this);

    this.state = {
      list: undefined,
      categoriesList: undefined,
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ categoriesList: categorias });
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
        <Button clickFunction={ this.clickFunction } buttonText="Shopping Cart" />
      </>
    );
  }

  async searchProducts({ target }) {
    const searchFilter = target.parentElement.firstChild.value;
    const response = await getProductsFromCategoryAndQuery(searchFilter, searchFilter);
    this.setState({ list: response.results });
  }

  renderResults() {
    const { list } = this.state;
    if (list.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        {list.map((item) => (
          <div key={ item.id } data-testid="product">
            <p>{item.title}</p>
            <img src={ item.thumbnail } alt="Product" />
            <p>
              {item.price}
              {' '}
              reais
            </p>
          </div>
        ))}
      </div>
    );
  }

  renderCategories() {
    const { categoriesList } = this.state;
    return (
      categoriesList.map((category) => (
        <li key={ category.id }>
          <label htmlFor={ category.id } data-testid="category">
            <input id={ category.id } name="category" type="radio" />
            {category.name}
          </label>
        </li>
      ))
    );
  }

  render() {
    const { list, categoriesList } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchProducts }
        >
          Pesquisar
        </button>
        {list ? this.renderResults() : this.emptyListMessage() }
        <ul>
          {categoriesList && this.renderCategories()}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.objectOf,
}.isRequired;

export default Home;
