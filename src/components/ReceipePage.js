import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRecipe from "../Utils/Hooks/useRecipe";
import useOnline from "../Utils/Hooks/useOnline";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ReceipePage = () => {
  // useparams return id so directly destructing it
  // else you can write const param = useParams();\
  const params = useParams();

  const recipe = useRecipe(params.id);

  const online = useOnline();
  if (!online) {
    return <h1>No Internet Connection</h1>;
  }

  const dispatch = useDispatch();

  const handleCart = (item) => {
    dispatch(addItem(item));
  };

  return !recipe ? (
    <Shimmer />
  ) : (
    <>
      <div className="page">
        <div className="ingredients">
          <h1>Ingredients</h1>
          <ul>
            {recipe.ingredients.map((data, index) => (
              <li key={index}>
                {data} -{" "}
                <button onClick={() => handleCart(data)}>AddItem</button>
              </li>
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
