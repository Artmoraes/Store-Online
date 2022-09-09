import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ProjectContext from '../context/ProjectContext';
import Product from './Product';
import './SearchProducts.css';

function SearchProducts() {
  const { newDataProducts } = useContext(ProjectContext);

  const listProductChecked = () => {
    const { results } = newDataProducts;
    if (results) {
      return (
        results.map((productChecked, index) => (
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

  return (
    <>
      {listProductChecked()}
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
