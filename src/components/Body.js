import Card from "./Card";
// import { foodRecipes } from "../constants";
import { useEffect, useState } from "react";

function filterData(searchInput, recipes) {
  return recipes.filter((recipe) =>
    recipe?.name?.toLowerCase().includes(searchInput?.toLowerCase())
  );
}

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

  // if (!allRecipes) {
  //   return <p>No, Data is pulled here</p>;
  // }

  // if (filteredRecipes.length === 0) {
  //   return <p>No, Data Found</p>;
  // }
  // Shimmer need to learn

  return (
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
          filteredRecipes.map((data) => <Card key={data.id} {...data} />)
        ) : (
          <p>Sorry, Please try Again</p>
        )}
      </div>
    </>
  );
};

export default Body;
