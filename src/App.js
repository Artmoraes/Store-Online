import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataProvider';
import DetailsProduct from './pages/DetailsProduct';
import FinalizePurchase from './pages/FinalizePurchase';
import Home from './pages/Home';
import InsertProducts from './pages/InsertProducts';
import Products from './pages/Products';
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
            <Route path="/user">
              <User />
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
            <Route path="/detailsproduct/:id">
              <DetailsProduct />
            </Route>
            <Route path="/insertproducts">
              <InsertProducts />
            </Route>
            <Route path="/finalizePurchase">
              <FinalizePurchase />
            </Route>
          </Switch>
        </BrowserRouter>
      </DataProvider>
    );
  }
}

export default App;
