import React, { Component } from 'react';
import './App.js';
import './css/style.css';
import './css/style2.css';
import './css/up.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Frontpage from './components/Frontpage.jsx'
import ProductUp from './components/ProductUp.jsx'

import Products from './components/Products.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Footer from './components/Footer.jsx';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/" component={Frontpage} />
          <Route exact path="/frontpage" component={Frontpage} />
          <Route exact path="/frontpage/products" component={Products} />
          <Route exact path="/frontpage/products/ProductUp" component={ProductUp} />
          <Route exact path="/frontpage/products/productdetail" component={ProductDetail} />

        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
