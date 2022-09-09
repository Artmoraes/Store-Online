import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProjectContext from '../context/ProjectContext';

function Categories() {
  const { categories, setIdCategories } = useContext(ProjectContext);
  return (
    <div>
      <h1>CATEGORIAS</h1>
      {categories.map((element) => (
        <label
          key={element.id}
          htmlFor={element.id}
        >
          <input
            data-testid="category"
            type="radio"
            name="select"
            id={element.id}
            onChange={({ target }) => { setIdCategories(target.id) }}
          />
          {element.name}
        </label>))
      }
    </div >
  );
}

Categories.propTypes = {
  handleButtonSelect: PropTypes.func.isRequired,
};

export default Categories;
