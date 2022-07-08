import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={ Home } />
        <Route path="/shopcart" component={ ShopCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
