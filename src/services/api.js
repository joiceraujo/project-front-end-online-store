export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let response = '';
  if (!categoryId && query) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  } else if (categoryId && !query) {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  }
  return response.json();
}
