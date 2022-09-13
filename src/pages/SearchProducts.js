import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';
import './SearchProducts.css';

function SearchProducts() {
  const {
    InputSearchProduct, loadProducts, setInputSearchProduct,
  } = useContext(ProjectContext);

  const inputForm = () => (
    <div>
      <input
        type="text"
        value={ InputSearchProduct }
        onChange={ ({ target }) => { setInputSearchProduct(target.value); } }
      />
      <button
        type="button"
        onClick={ loadProducts }
      >
        Buscar
      </button>
    </div>
  );

  return (
    <fieldset>
      {inputForm()}
      <Link to="/user">
        {/* <User /> */}
      </Link>
    </fieldset>
  );
}

SearchProducts.propTypes = {
  // dataProductsChecked: PropTypes.arrayOf(PropTypes.object).isRequired,
  // loadProducts: PropTypes.func.isRequired,
  // handleInput: PropTypes.func.isRequired,
  // addCartList: PropTypes.func.isRequired,
};

export default SearchProducts;
