import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataProvider';
import DetailsProduct from './pages/DetailsProduct';
import Home from './pages/Home';
import InsertProducts from './pages/InsertProducts';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';
import User from './pages/User';

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/categories" exact>
              <InsertProducts />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/ShoppingCart">
              <ShoppingCart />
            </Route>
            <Route path="/" exact component={ Home } />
            <Route path="/ShoppingCart" component={ ShoppingCart } />
            <Route
              path="/DetailsProduct/:id"
              render={ (props) => (<DetailsProduct
                { ...props }
                addCartList={ this.addCartList }
              />) }
            />
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
      </DataProvider>
    );
  }
}

export default App;
