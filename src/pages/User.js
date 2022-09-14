import React from 'react';
import { Link } from 'react-router-dom';
import './css/User.css';
import SearchProducts from './SearchProducts';

function User() {
  return (
    <>
      <SearchProducts />
      <div className="container-user">
        <div className="infos-user">
          <p>Nome:</p>
          <p>Sobrenome:</p>
          <p>Email:</p>
          <p>Password:</p>
          <p>Data de aniversário:</p>
          <br />
        </div>
        <Link to="/insertproducts">
          <button
            type="button"
            value="Adicionar produto"
            className="button-products"
          >
            Adicionar produto
          </button>
        </Link>

      </div>
    </>
  );
}

export default User;
