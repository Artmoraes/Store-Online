import PropTypes from 'prop-types';
import React from 'react';

class ProductCart extends React.Component {
  constructor() {
    super();

    this.state = {
      firstClickButton: false,
      newQuantity: 1,
    };
  }

  handleChange = ({ target }) => {
    const { className } = target;
    const { quantity } = this.props;
    const { firstClickButton, newQuantity } = this.state;

    if (!firstClickButton) {
      if (className === '1') {
        this.setState({ firstClickButton: true, newQuantity: quantity + 1 });
      } else if (quantity >= 1 && className === '0') {
        this.setState({ firstClickButton: true, newQuantity: quantity - 1 });
      }
    } else if (className === '1') {
      this.setState({ firstClickButton: true, newQuantity: newQuantity + 1 });
    } else if (newQuantity >= 1 && className === '0') {
      this.setState({ firstClickButton: true, newQuantity: newQuantity - 1 });
    }
  }

  render() {
    const { title, image, quantity, price, id, removeProduct, available } = this.props;
    const { firstClickButton, newQuantity } = this.state;

    return (
      <>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { firstClickButton ? newQuantity : quantity }

        </p>
        <button
          className="1"
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleChange }
          disabled={ newQuantity === available }
        >
          +
        </button>
        <button
          className="0"
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleChange }
          disabled={ newQuantity < 2 }
        >
          -
        </button>

        <button
          name="x"
          className={ id }
          type="button"
          onClick={ removeProduct }
        >
          X
        </button>
      </>
    );
  }
}

ProductCart.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
  available: PropTypes.number.isRequired,
};

export default ProductCart;
