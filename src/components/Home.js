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
    this.setCategoryFilter = this.setCategoryFilter.bind(this);

    this.state = {
      productsList: undefined,
      categoriesList: undefined,
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ categoriesList: categorias });
  }

  async setCategoryFilter({ target }) {
    const response = await getProductsFromCategoryAndQuery(target.value, undefined);
    this.setState({ productsList: response.results });
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
    this.setState({ productsList: response.results });
  }

  renderResults() {
    const { productsList } = this.state;
    if (productsList.length === 0) return <p>Nenhum produto foi encontrado</p>;
    return (
      <div>
        {productsList.map((item) => (
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
            <input
              id={ category.id }
              name="category"
              type="radio"
              value={ category.name }
              onChange={ this.setCategoryFilter }
            />
            {category.name}
          </label>
        </li>
      ))
    );
  }

  render() {
    const { productsList, categoriesList } = this.state;
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
        {productsList ? this.renderResults() : this.emptyListMessage() }
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
