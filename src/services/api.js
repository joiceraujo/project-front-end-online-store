export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response1 = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const response2 = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const response3 = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  if (response3) return response3.json();
  if (response1) return response1.json();
  if (response2) return response2.json();
}
