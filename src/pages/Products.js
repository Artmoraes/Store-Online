import React, { useContext } from 'react';
import ProjectContext from '../context/ProjectContext';

function Products() {
  const { products, categories } = useContext(ProjectContext);
  return (
    <div>
      <div>
        {categories.map((element) => (
          <fieldset key={ element.id }>
            <h1>{element.nameCategory}</h1>
            {products.map((objProd) => (element.id === objProd.CategoryId ? (
              <fieldset key={ objProd.id }>
                <h3>{objProd.name}</h3>
                <p>{objProd.value}</p>
              </fieldset>
            ) : null
            ))}
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default Products;
