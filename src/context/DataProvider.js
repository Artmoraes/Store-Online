import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getCategories, getProducts } from '../services/api';
import ProjectContext from './ProjectContext';

function DataProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [IdCategories, setIdCategories] = useState([]);
  const [InputSearchProduct, setInputSearchProduct] = useState('');
  const [newDataProducts, setNewDataProducts] = useState([]);

  useEffect(() => {
    try {
      // Utilizado na aba Home para atualizar a API
      getCategories().then((dataObj) => { setCategories(dataObj); });
      getProducts().then((dataObj) => { setProducts(dataObj); });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const context = {
    cart,
    setCart,
    categories,
    setCategories,
    IdCategories,
    setIdCategories,
    InputSearchProduct,
    setInputSearchProduct,
    newDataProducts,
    setNewDataProducts,
    products,
  }; // Constante feita para alocar todos os dados que serão passados posteriormente no value do provider

  return (
    <ProjectContext.Provider value={ context }>
      {children}
    </ProjectContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
