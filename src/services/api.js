export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let link;

  if (categoryId !== '' && query !== '') {
    link = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId !== '' && query === '') {
    link = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else {
    link = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
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
