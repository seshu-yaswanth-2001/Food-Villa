import Card from "./Card";
// import { foodRecipes } from "../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/Hooks/useOnline";

const Body = () => {
  // const [allRecipes, setAllRecipes] = useState(foodRecipes?.recipes);
  const [allRecipes, setAllRecipes] = useState([]);
  // const [filteredRecipes, setFilteredRecipes] = useState(foodRecipes?.recipes);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    const data = filterData(searchInput, allRecipes);
    setFilteredRecipes(data);
  };

  const handleReset = () => {
    setSearchInput("");
    setFilteredRecipes(allRecipes);
  };

  // UseEffect
  useEffect(() => {
    recipeAPI();
  }, []);

  async function recipeAPI() {
    const data = await fetch("https://dummyjson.com/recipes");
    const jsonValue = await data.json();
    // optional Chaining
    // console.log(jsonValue?.recipes);
    setAllRecipes(jsonValue?.recipes);
    setFilteredRecipes(jsonValue?.recipes);
  }

  const online = useOnline();
  if(!online) {
    return <h1>No interner connection</h1>
  }

  // if (!allRecipes) {
  //   return <p>No, Data is pulled here</p>;
  // }

  // if (filteredRecipes.length === 0) {
  //   return <p>No, Data Found</p>;
  // }
  // Shimmer need to learn

  return allRecipes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search">
        <input
          className="bar"
          type="text"
          placeholder="Please Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className="search-Button" onClick={handleSearch}>
          Search
        </button>
        <button className="Reset-Button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((data) => (
            <Link key={data.id} to={"/foods/" + data.id}>
              <Card {...data} />
            </Link>
          ))
        ) : (
          <p>No recipe found please try again</p>
        )}
      </div>
    </>
  );
};

export default Body;
