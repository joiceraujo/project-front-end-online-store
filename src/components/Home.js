import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.searchProducts = this.searchProducts.bind(this);
    this.renderResults = this.renderResults.bind(this);

    this.state = {
      list: undefined,
      categoriesList: [],
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ categoriesList: categorias });
  }

  emptyListMessage() {
    return (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
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
          {categoriesList.map((category, index) => (
            <li key={ index }>
              <label htmlFor="category" data-testid="category">
                <input id="category" type="radio" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
