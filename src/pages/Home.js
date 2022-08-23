import PropTypes from 'prop-types';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchProducts from './SearchProducts';

class Home extends React.Component {
  constructor() {
    super();

    const state = {
      valueInput: '',
      categoryId: '',
      dataProducts: [],
    };

    this.state = state;
  }

  loadProducts = async () => {
    const { valueInput, categoryId } = this.state;
    const resultApi = await getProductsFromCategoryAndQuery(categoryId, valueInput);
    const returnProducts = await resultApi.results;
    let newDataProducts = '';

    if (returnProducts.length < 1) {
      newDataProducts = { dataProducts: false };
    } else {
      newDataProducts = { dataProducts: returnProducts };
    }

    this.setState(newDataProducts);
  };

  handleButtonSelect = ({ target }) => {
    const { id } = target;
    this.setState({ categoryId: id });
    this.loadProducts();
  }

  handleInput = ({ target }) => {
    const { value } = target;
    const inputObj = { valueInput: value };
    this.setState(inputObj);
  }

  // t
  render() {
    const { dataProducts, categoryId } = this.state;
    const { addCartList } = this.props;
    const count = localStorage.getItem('count');

    return (
      <section>
        <div>
          <Categories handleButtonSelect={ this.handleButtonSelect } />
        </div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>

        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <FaShoppingCart />
          <p data-testid="shopping-cart-size">{ count }</p>
        </Link>
        <SearchProducts
          addCartList={ addCartList }
          dataProductsChecked={ dataProducts }
          categoryId={ categoryId }
          handleInput={ this.handleInput }
          loadProducts={ this.loadProducts }
        />
      </section>
    );
  }
}

Home.propTypes = {
  addCartList: PropTypes.func.isRequired,
};

export default Home;
