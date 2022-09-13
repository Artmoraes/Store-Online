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

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let link;
  if (categoryId !== '' && query !== '') {
    // link = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId !== '' && query === '') {
    // link = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    // link = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }

  const response = await fetch(link);
  const data = await response.json();

  return data;
}

export async function displaysProductDetails(productId) {
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = response.json();
  return data;
}
