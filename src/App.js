import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ShopCart from './components/ShopCart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={ Home } />
        <Route path="/shopcart" component={ ShopCart } />
        <Route path="/:id" component={ ProductDetails } />
      </BrowserRouter>
    </div>
  );
}

export default App;
