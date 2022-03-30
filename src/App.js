// App.js
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { hot } from 'react-hot-loader'

import Home from './routes/Home'
import Board from './routes/Board'
import Product from './routes/Product'
import Login from './routes/Login'

import Main from './layouts/Main/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="users/*" element={<Users />} /> */}
          </Routes>
        </Main>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);