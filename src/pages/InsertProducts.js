import React, { useState } from 'react';
import { requestProducts } from '../services/api';

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
      <form>
        <input
          type="nameCategory"
          id="nameCategory"
          name="nameCategory"
          value={ nameCategory }
          onChange={ ({ target }) => {
            setNameCategory(target.value);
          } }
          required
        />
        <input
          type="name"
          id="name"
          name="name"
          value={ name }
          onChange={ ({ target }) => {
            setName(target.value);
          } }
          required
        />
        <input
          type="value"
          id="value"
          name="value"
          value={ value }
          onChange={ ({ target }) => {
            setValue(target.value);
          } }
          required
        />
        <input
          type="description"
          id="description"
          name="description"
          value={ description }
          onChange={ ({ target }) => {
            setDescription(target.value);
          } }
          required
        />
        <button type="button" onClick={ onClickButton }>Registrar</button>
      </form>
    </div>
  );
}

export default InsertProducts;
