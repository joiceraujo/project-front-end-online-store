export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let response = '';
  if (!categoryId && query) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  } else if (categoryId && !query) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  }
  const data = response.json();
  return data;
}
