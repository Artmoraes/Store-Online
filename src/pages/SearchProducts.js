import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ProjectContext from '../context/ProjectContext';
import Product from './Product';
import './SearchProducts.css';

async function SearchProducts() {
  const { InputSearchProduct, setInputSearchProduct } = useContext(ProjectContext);

  const listProductChecked = (dataProducts) => {
    // const { addCartList } = this.props;
    if (dataProducts) {
      return (
        dataProducts.map((productChecked, index) => (
          <section key={index}>
            <div
              key={productChecked.id}
              className="cardProduct"
            >
              <Product
                title={productChecked.title}
                image={productChecked.thumbnail}
                price={productChecked.price}
                key={productChecked.id}
                id={productChecked.id}
                // addCartList={addCartList}
                freeShipping={productChecked.shipping.free_shipping}
                available={productChecked.available_quantity}
              />
            </div>
          </section>
        ))
      );
    }
    return <p>Nenhum produto encontrado</p>;
  }

  // const { dataProductsChecked, loadProducts, handleInput } = this.props;
  const inputForm = () => (
    <>
      <input
        type="text"
        data-testid="query-input"
        value={InputSearchProduct}
        onChange={({ target }) => { setInputSearchProduct(target.value) }}
      />
      <button
        data-testid="query-button"
        type="button"
      // onClick={ loadProducts }
      >
        Buscar
      </button>
    </>
  );

  return (
    <>
      {inputForm()}
      {/* {listProductChecked(dataProductsChecked)} */}
    </>
  );
}

SearchProducts.propTypes = {
  dataProductsChecked: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadProducts: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  addCartList: PropTypes.func.isRequired,
};

export default SearchProducts;
