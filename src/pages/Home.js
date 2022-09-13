import React, { useContext } from 'react';
import Categories from '../components/Categories';
import ProjectContext from '../context/ProjectContext';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Products from './Products';
// import Product from './Product';

function Home() {
  const { IdCategories, InputSearchProduct,
    setInputSearchProduct, newDataProducts,
    setNewDataProducts } = useContext(ProjectContext);

  const loadProducts = async () => {
    const loading = await getProductsFromCategoryAndQuery(
      IdCategories, InputSearchProduct,
    );
    const returnProducts = await loading;
    console.log(newDataProducts);
    if (returnProducts.length < 1) {
      setNewDataProducts(false);
    } else {
      setNewDataProducts(returnProducts);
    }
  };

  const inputForm = () => (
    <div>
      <input
        type="text"
        data-testid="query-input"
        value={ InputSearchProduct }
        onChange={ ({ target }) => { setInputSearchProduct(target.value); } }
      />
      <button
        data-testid="query-button"
        type="button"
        onClick={ loadProducts }
      >
        Buscar
      </button>
    </div>
  );

  // const count = localStorage.getItem('count');

  return (
    <main>
      <nav>
        {inputForm()}
        {/* <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          <FaShoppingCart />
          <p data-testid="shopping-cart-size">{count}</p>
        </Link> */}
      </nav>
      <aside>
        <Categories />
      </aside>
      <section>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        {/* <SearchProducts /> */}
      </section>
      <Products />
    </main>
  );
}

Home.propTypes = {
  // addCartList: PropTypes.func.isRequired,
};

export default Home;
