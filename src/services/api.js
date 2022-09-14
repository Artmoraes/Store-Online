import axios from 'axios';

// const link = 'https://e-commerce-bkd.herokuapp.com/categories';

export async function getCategories() {
  const link = 'https://e-commerce-bkd.herokuapp.com/categories';
  const { data } = await axios.get(link);
  return data;
}

export async function requestProducts(parameters) {
  const link = 'https://e-commerce-bkd.herokuapp.com/categories';
  const data = await axios.post(link, parameters);
  return data;
}

export async function getProducts() {
  const link = 'https://e-commerce-bkd.herokuapp.com/products';
  const { data } = await axios.get(link);
  return data;
}

export async function especificProductDetails(productId) {
  const link = `https://e-commerce-bkd.herokuapp.com/products/${productId}`;
  const { data } = await axios.get(link);
  return data;
}

// export async function getCEP(cep) {
//   const link = `https://viacep.com.br/ws/${cep}/json`;
//   const data = await axios.get(link);
//   return data;
// }
