import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProjectContext from '../context/ProjectContext';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Product';
import SearchProducts from './SearchProducts';


function Home() {
  const { IdCategories, InputSearchProduct, setInputSearchProduct, newDataProducts, setNewDataProducts } = useContext(ProjectContext);

  const loadProducts = async () => {
    const loading = await getProductsFromCategoryAndQuery(IdCategories, InputSearchProduct);
    const returnProducts = await loading;
    console.log(newDataProducts);
    if (returnProducts.length < 1) {
      setNewDataProducts(false);
    } else {
      setNewDataProducts(returnProducts);
    }
  };

  const inputForm = () => {
    return (<div>
      <input
        type="text"
        data-testid="query-input"
        value={InputSearchProduct}
        onChange={({ target }) => { setInputSearchProduct(target.value) }}
      />
      <button
        data-testid="query-button"
        type="button"
        onClick={loadProducts}
      >
        Buscar
      </button>
    </div>)

  }

  const count = localStorage.getItem('count');

  return (
    <section>
      {inputForm()}
      <div>
        <Categories></Categories>
      </div>
      <div></div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>

      <Link
        data-testid="shopping-cart-button"
        to="/ShoppingCart"
      >
        <FaShoppingCart />
        <p data-testid="shopping-cart-size">{count}</p>
      </Link>
      <SearchProducts />
    </section>
  );
}

Home.propTypes = {
  addCartList: PropTypes.func.isRequired,
};

export default Home;
