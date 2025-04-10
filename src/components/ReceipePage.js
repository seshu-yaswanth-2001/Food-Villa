import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ReceipePage = () => {
  // useparams return id so directly destructing it
  // else you can write const param = useParams();\
  const params = useParams();
  // const { id } = params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data.json();
    const selectedRecipe = json.recipes.find((r) => r.id === Number(params.id));
    setRecipe(selectedRecipe);
    // console.log(json);
  }

  return !recipe ? (
    <Shimmer />
  ) : (
    <>
      <div className="page">
        <div className="ingredients">
          <h1>Ingredients</h1>
          <ul>
            {recipe.ingredients.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>

        <div className="Instructions">
          <h1>Instructions</h1>
          <ul>
            {recipe.instructions.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ReceipePage;
