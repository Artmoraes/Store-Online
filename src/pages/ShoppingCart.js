import React from 'react';
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

  // render() {
  //   const { productsInCart, removeProduct } = this.props;
  //   return (
  //     <section>
  //       {productsInCart.length > 0
  //         ? this.renderProducts(productsInCart, removeProduct)
  //         : (
  //           <p>Seu carrinho está vazio</p>
  //         )}
  //       <Link
  //         to="/Checkout"
  //       >
  //         <button type="submit">
  //           Finalizar Compra
  //         </button>
  //       </Link>
  //     </section>
  //   );
  // }
}

ShoppingCart.propTypes = {
  // productsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  // removeProduct: PropTypes.func.isRequired,
};

export default ShoppingCart;
