import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesResult = await getCategories();
    this.setState({
      categories: categoriesResult,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleButtonSelect } = this.props;
    return (
      <div>
        <h1>CATEGORIAS</h1>
        { categories.map((element) => (
          <label
            key={ element.id }
            htmlFor={ element.id }
          >
            <input
              data-testid="category"
              type="radio"
              name="select"
              id={ element.id }
              onChange={ handleButtonSelect }
            />
            {element.name}
          </label>)) }
      </div>
    );
  }
}

Categories.propTypes = {
  handleButtonSelect: PropTypes.func.isRequired,
};

export default Categories;
