import React, { useState } from 'react';
import { requestProducts } from '../services/api';
import './css/InsertProducts.css';
import SearchProducts from './SearchProducts';

function InsertProducts() {
  const [nameCategory, setNameCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(Number);

  function onClickButton() {
    requestProducts({ nameCategory, name, description, value });
  }

  return (
    <div>
      <SearchProducts />
      <div className="container-insert-products">
        <form className="form-insert-products">
          <label htmlFor="Categoria">
            Categoria do Produto
            <input
              type="nameCategory"
              className="inputProduct"
              id="nameCategory"
              placeholder="Nome da Categoria"
              name="nameCategory"
              value={ nameCategory }
              onChange={ ({ target }) => {
                setNameCategory(target.value);
              } }
              required
            />
          </label>
          <label htmlFor="Name">
            Nome do Produto
            <input
              type="name"
              className="inputProduct"
              id="name"
              name="name"
              placeholder="Nome do Produto"
              value={ name }
              onChange={ ({ target }) => {
                setName(target.value);
              } }
              required
            />
          </label>
          <label htmlFor="Value">
            R$
            <input
              type="text"
              className="inputProduct"
              id="value"
              name="value"
              placeholder="Valor do Produto"
              value={ value }
              onChange={ ({ target }) => {
                setValue(target.value);
              } }
              required
            />
          </label>
          <label htmlFor="Description">
            Descrição do Produto
            <input
              type="description"
              className="inputProduct"
              id="description"
              name="description"
              placeholder="Descrição do Produto"
              value={ description }
              onChange={ ({ target }) => {
                setDescription(target.value);
              } }
              required
            />
          </label>
          <button
            type="button"
            onClick={ onClickButton }
            className="button-products btnProd"
          >
            Registrar

          </button>
        </form>
      </div>
    </div>
  );
}

export default InsertProducts;
