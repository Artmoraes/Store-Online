import React, { useContext, useEffect, useState } from 'react';
import ProjectContext from '../context/ProjectContext';
import { especificProductDetails } from '../services/api';
import './css/DetailsProducts.css';
import SearchProducts from './SearchProducts';

function DetailsProduct() {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  const [itemCart, setItemCart] = useState(1);
  const { IdCategories } = useContext(ProjectContext);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    try {
      especificProductDetails(IdCategories).then((dataObj) => { setProduct(dataObj); });
    } catch (error) {
      console.error(error);
    }
  }, [IdCategories]);

  const myCart = JSON.parse(localStorage.getItem('cart'));

  const onClickButton = () => {
    const productInfo = {
      name: product.name,
      value: product.value,
      description: product.description,
    };
    localStorage.setItem('cart', JSON.stringify([...myCart, productInfo]));
  };

  return (
    <>
      <SearchProducts />
      <section className="box-info-product">
        <h1>Detalhes do Produto</h1>
        <div className="info-products">
          <h3>{product.name}</h3>
          <p>{product.value}</p>
          <p>{product.description}</p>
        </div>
        <button
          type="submit"
          onClick={ () => {
            onClickButton(); setItemCart(itemCart + 100);
          } }
          className="button-products"
        >
          adicionar ao carrinho
        </button>
      </section>
    </>

  );
}

export default DetailsProduct;
