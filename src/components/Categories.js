import React, { useContext } from 'react';
import ProjectContext from '../context/ProjectContext';
import './css/Categories.css';

function Categories() {
  const { categories, setIdCategories } = useContext(ProjectContext);
  return (
    <div className="container-categories">
      <h1>CATEGORIAS</h1>
      {categories.map((element) => (
        <section
          key={ element.id }
          htmlFor={ element.id }
          className="box-categories"
        >
          <input
            data-testid="category"
            className="type-category"
            type="radio"
            name="select"
            id={ element.id }
            onChange={ ({ target }) => { setIdCategories(target.id); } }
          />
          {element.nameCategory}
        </section>))}
    </div>
  );
}

Categories.propTypes = {
  // handleButtonSelect: PropTypes.func.isRequired,
};

export default Categories;
