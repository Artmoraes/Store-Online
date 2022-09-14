import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';
import './css/Products.css';

function Products() {
  const { products, categories, setIdCategories } = useContext(ProjectContext);

  return (
    <div>
      {categories.map((element) => (
        <section key={ element.id } className="box-categories-products">
          <h1>{element.nameCategory}</h1>
          <div className="box-all-products">
            {products.map((objProd) => (element.id === objProd.CategoryId ? (
              <fieldset key={ objProd.id } className="box-product">
                <Link
                  to={ `./detailsproduct/${objProd.id}` }
                  key={ objProd.id }
                  onClick={ () => setIdCategories(objProd.id) }
                >
                  <h3>{objProd.name}</h3>
                  <p>{`R$ ${objProd.value}`}</p>
                </Link>
              </fieldset>
            ) : null
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;
