import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';
import './css/SearchProducts.css';

function SearchProducts() {
  const {
    InputSearchProduct, loadProducts, setInputSearchProduct,
  } = useContext(ProjectContext);

  const inputForm = () => (
    <div className="search-form">
      <input
        type="text"
        value={ InputSearchProduct }
        className="search-input"
        onChange={ ({ target }) => { setInputSearchProduct(target.value); } }
      />
      <button
        type="button"
        onClick={ loadProducts }
        className="magnifying-glass-button"
      >
        <SearchIcon className="magnifying-glass" />
      </button>
    </div>
  );

  return (
    <nav className="navigation-bar">
      <Link to="/">
        <LocalMallIcon className="material-ui" fontSize="large" />
      </Link>
      {inputForm()}
      <Link to="/ShoppingCart">
        <ShoppingCartIcon className="material-ui" fontSize="large" />
      </Link>
      <Link to="/user">
        <AccountCircleIcon className="material-ui" fontSize="large" />
      </Link>
    </nav>
  );
}

export default SearchProducts;
