import React from 'react';
import PropTypes from 'prop-types';
import ProductCart from '../components/ProductCart';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderProducts = (productsInCart) => (
    productsInCart.map((product) => (<ProductCart
      title={ product.productTitle }
      image={ product.productImage }
      quantity={ product.quantity }
      price={ product.productPrice }
      key={ product.productTitle }
    />))
  )

  render() {
    const { productsInCart } = this.props;
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
    } = this.state;

    return (
      <section>
        <h1>Checkout</h1>
        <div>
          { this.renderProducts(productsInCart) }
        </div>

        <form>

          <input
            data-testid="checkout-fullname"
            name="fullname"
            value={ fullname }
            onChange={ this.handleChange }
            placeholder="Nome Completo"
            type="text"
          />

          <input
            data-testid="checkout-email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            type="text"
          />

          <input
            data-testid="checkout-cpf"
            name="cpf"
            value={ cpf }
            onChange={ this.handleChange }
            placeholder="CPF"
            type="text"
          />

          <input
            data-testid="checkout-phone"
            name="phone"
            value={ phone }
            onChange={ this.handleChange }
            placeholder="Telefone"
            type="text"
          />

          <input
            data-testid="checkout-cep"
            name="cep"
            value={ cep }
            onChange={ this.handleChange }
            placeholder="CEP"
            type="text"
          />

          <input
            data-testid="checkout-address"
            name="address"
            value={ address }
            onChange={ this.handleChange }
            placeholder="Endereço"
            type="text"
          />
        </form>
        <div>
          <h3>Escolha a Forma de Pagamento</h3>
        </div>
      </section>
    );
  }
}

Checkout.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
