import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCart: 1,
    };
  }

  handleQuantity = ({ target }) => {
    const { name } = target;
    const { valueCart } = this.state;
    const newValueCart = name === '+' ? valueCart + 1 : valueCart - 1;

    this.setState({ valueCart: newValueCart });
  }

  auxiliarFunction = () => {
    const { title, image, price, addCartList, available } = this.props;
    const { valueCart } = this.state;

    const productToCart = {
      productTitle: title,
      productImage: image,
      productPrice: price,
      quantity: valueCart,
      availableQuantity: available,
    };
    addCartList(productToCart);
    const storage = localStorage.getItem('count') || 0;
    localStorage.setItem('count', parseInt(storage, 10) + 1);
  }

  render() {
    const { title, image, price, id, freeShipping } = this.props;
    const { valueCart } = this.state;
    
    return (
      <section data-testid="product">
        { freeShipping ? <h3 data-testid="free-shipping">Frete grátis</h3> : '' }
        <Link
          to={ `/DetailsProduct/${id}` }
          data-testid="product-detail-link"
        >
          <p>{ title }</p>
          <img src={ image } alt="foto" width="100px" />
          <p>{ price }</p>
        </Link>
        <div>
          <button
            data-testid="product-add-to-cart"
            type="submit"
            onClick={ this.auxiliarFunction }
          >
            adicionar ao carrinho
          </button>
          <h3 data-testid="shopping-cart-product-quantity">
            { valueCart }
          </h3>
          <button
            name="+"
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleQuantity }
            disabled={ valueCart === available }
          >
            +
          </button>
          <button
            name="-"
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.handleQuantity }
            disabled={ valueCart < 2 }
          >
            -
          </button>
        </div>
      </section>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addCartList: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  available: PropTypes.number.isRequired,
};

export default Product;
