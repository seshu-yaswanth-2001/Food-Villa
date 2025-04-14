export function filterData(searchInput, recipes) {
  return recipes.filter((recipe) =>
    recipe?.name?.toLowerCase().includes(searchInput?.toLowerCase())
  );
}
