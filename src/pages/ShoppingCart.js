/* eslint-disable no-alert */
/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ShoppingCart.css';
import SearchProducts from './SearchProducts';

function ShoppingCart() {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  const array = localStorage.getItem('cart');
  const [cep, setCep] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [lastNameUser, setLastNameUser] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <SearchProducts />
      <section className="container-all-cart">
        <h1>Carrinho de Compras</h1>
        <div className="container-cart-products">
          {JSON.parse(array).map((obj, index) => (
            <div key={ index } className="cart-products">
              <div className="cart-item">
                <h3>{obj.name}</h3>
                <h3>{`R$ ${obj.value}`}</h3>
                <h3>{obj.description}</h3>
              </div>
            </div>
          ))}
        </div>
        <aside className="container-cart-cep">
          <form>
            <div className="cart-name-lastname">
              <label htmlFor="name">
                <h3>Insira aqui seu nome</h3>
                <input
                  type="text"
                  className="input inputNames"
                  value={ nameUser }
                  placeholder="Nome"
                  onChange={ ({ target }) => setNameUser(target.value) }
                  required
                />
              </label>
              <label htmlFor="lastName">
                <input
                  type="text"
                  className="input inputNames"
                  value={ lastNameUser }
                  placeholder="Sobrenome"
                  onChange={ ({ target }) => setLastNameUser(target.value) }
                  required
                />
              </label>
            </div>
            <label htmlFor="CEP">
              <h3>Insira aqui seu CEP</h3>
              <input
                type="text"
                value={ cep }
                className="input"
                placeholder="CEP"
                onChange={ ({ target }) => setCep(target.value) }
                min="9"
                max="9"
                required
              />
            </label>
            <label htmlFor="Email">
              <h3>Insira aqui seu Email</h3>
              <input
                type="email"
                value={ email }
                className="input"
                placeholder="Email"
                onChange={ ({ target }) => setEmail(target.value) }
                required
              />
            </label>
            <Link to="/finalizePurchase">
              <button
                type="button"
                value="Adicionar produto"
                className="button-products button-finally"
              >
                Finalizar Compras
              </button>
            </Link>
          </form>
        </aside>
      </section>
    </>
  );
}

export default ShoppingCart;
