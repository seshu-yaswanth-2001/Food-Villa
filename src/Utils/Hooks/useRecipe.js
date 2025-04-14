import { useState, useEffect } from "react";

const useRecipe = (resID) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    const selectedRecipe = json.recipes.find((r) => r.id === Number(resID));
    setRecipe(selectedRecipe);
  }

  return recipe;
};

export default useRecipe;
