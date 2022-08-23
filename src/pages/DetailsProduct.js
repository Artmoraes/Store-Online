import PropTypes from 'prop-types';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { displaysProductDetails } from '../services/api';
import AvaliationProduct from './AvaliationProduct';

class DetailsProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsObj: '',
      quantityProduct: 1,
      freeShipping: '',
    };
  }

  componentDidMount() {
    this.getObject();
  }

  auxiliarFunction = () => {
    const { addCartList } = this.props;
    const { detailsObj, quantityProduct } = this.state;
    const { title, thumbnail, price } = detailsObj;

    const productToCart = {
      productTitle: title,
      productImage: thumbnail,
      productPrice: price,
      quantity: quantityProduct,
    };
    addCartList(productToCart);
  }

  handleChange = ({ target }) => {
    const quantity = target.value;

    this.setState({
      quantityProduct: quantity,
    });
  }

  getObject = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const returnDisplaysProductDetails = await displaysProductDetails(id);

    this.setState({
      detailsObj: returnDisplaysProductDetails,
      freeShipping: returnDisplaysProductDetails.shipping.free_shipping,
    });
  }

  render() {
    const { detailsObj, freeShipping } = this.state;
    const { match } = this.props;
    const { id } = match.params;
    const count = localStorage.getItem('count');

    return (
      <section>
        { freeShipping ? <h3 data-testid="free-shipping">Frete grátis</h3> : '' }
        <p data-testid="product-detail-name">{ detailsObj.title }</p>
        <img src={ detailsObj.thumbnail } alt={ detailsObj.title } />
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="submit"
            onClick={ this.auxiliarFunction }
          >
            adicionar ao carrinho
          </button>
          <input
            type="number"
            data-testid="shopping-cart-product-quantity"
            onChange={ this.handleChange }
          />

          <Link
            data-testid="shopping-cart-button"
            to="/ShoppingCart"
          >
            <FaShoppingCart />
            <p data-testid="shopping-cart-size">{ count }</p>
          </Link>
        </div>
        <div>
          <AvaliationProduct id={ id } />
        </div>
      </section>
    );
  }
}

DetailsProduct.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  addCartList: PropTypes.func.isRequired,
};

export default DetailsProduct;
