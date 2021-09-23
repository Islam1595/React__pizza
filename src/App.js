import React from 'react';
import { Route } from 'react-router-dom';
import logosvg from './assets/img/pizza-logo.svg';

import { Header } from './components';
import { Home, Cart } from './pages';

console.log(logosvg);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
