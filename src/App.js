import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DataProvider from './context/DataProvider';
import Checkout from './pages/Checkout';
import DetailsProduct from './pages/DetailsProduct';
import Home from './pages/Home';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
      quantity: 0,
    };
  }

  addCartList = (product) => {
    this.setState((prevState) => ({
      productsInCart: [...prevState.productsInCart, product],
      quantity: prevState.quantity + 1,
    }));
  }

  removeProduct = ({ target }) => {
    const { productsInCart } = this.state;
    const newPruductsIncart = productsInCart;
    const { className } = target;

    newPruductsIncart.splice(className, 1);
    this.setState(newPruductsIncart);
  }

  render() {
    const { productsInCart } = this.state;

    return (
      <DataProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home
                addCartList={this.addCartList}
              />
            </Route>
            <Route path="/ShoppingCart">
              <ShoppingCart
                removeProduct={this.removeProduct}
                productsInCart={productsInCart}
              />
            </Route>
            <Route path="/" exact component={Home} />
            <Route path="/ShoppingCart" component={ShoppingCart} />
            <Route
              path="/DetailsProduct/:id"
              render={(props) => (<DetailsProduct
                {...props}
                addCartList={this.addCartList}
              />)}
            />
            <Route path="/Checkout">
              <Checkout productsInCart={productsInCart} />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </DataProvider>
    );
  }
}

export default App;
