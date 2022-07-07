import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
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
      </div>
    );
  }
}

export default Home;
