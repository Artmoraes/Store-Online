import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProjectContext from '../context/ProjectContext';
import { getProductsFromCategoryAndQuery } from '../services/api';
import SearchProducts from './SearchProducts';


function Home() {
  const { IdCategories, setIdCategories } = useContext(ProjectContext);

  const [valueInput, setValueInput] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [dataProducts, setDataProducts] = useState([]);
  const [newDataProducts, setNewDataProducts] = useState();

  const loadProducts = async () => {
    const loading = await getProductsFromCategoryAndQuery(IdCategories, valueInput);
    const returnProducts = await loading;
    if (returnProducts.length < 1) {
      setNewDataProducts(setDataProducts(false));
    } else {
      setNewDataProducts(setDataProducts(returnProducts));
    }
  };

  const handleInput = ({ target }) => {
    const { value } = target;
    const inputObj = { valueInput: value };
    this.setState(inputObj);
  }

  // const { addCartList } = this.props;
  const count = localStorage.getItem('count');

  return (
    <section>
      <div>
        <Categories>{loadProducts}</Categories>
      </div>
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
      {/* <SearchProducts
        // addCartList={addCartList}
        dataProductsChecked={dataProducts}
        categoryId={categoryId}
        handleInput={handleInput}
        loadProducts={loadProducts}
      /> */}
    </section>
  );
}

Home.propTypes = {
  addCartList: PropTypes.func.isRequired,
};

export default Home;
