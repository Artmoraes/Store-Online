import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends React.Component {
  renderProducts = (productsInCart, removeProduct) => (
    productsInCart.map((product, index) => (<ProductCart
      title={ product.productTitle }
      image={ product.productImage }
      quantity={ product.quantity }
      price={ product.productPrice }
      key={ product.productTitle }
      id={ index }
      removeProduct={ removeProduct }
      available={ product.availableQuantity }
    />))
  )

  render() {
    const { productsInCart, removeProduct } = this.props;
    return (
      <section>
        {productsInCart.length > 0
          ? this.renderProducts(productsInCart, removeProduct)
          : (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )}
        <Link
          to="/Checkout"
        >
          <button
            type="submit"
            data-testid="checkout-products"
          >
            Finalizar Compra
          </button>
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ShoppingCart;
