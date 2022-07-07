import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ list: categorias });
    console.log(categorias);
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

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.length === 0 && this.emptyListMessage() }
        {list.map((category, index) => (
          <ul key={ index }>
            <label htmlFor="category" data-testid="category">
              <input id="category" type="radio" />
            </label>
          </ul>
        ))}
      </div>
    );
  }
}
// Pair Programming: Allan e Tales.
export default Home;
