import { useState } from "react";
import { useNavigate } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Home() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");

  
  const cuisines = [...new Set(recipes.map((r) => r.cuisine))];

  
  const filteredRecipes = recipes.filter((recipe) => {
    const matchName = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCuisine =
      selectedCuisine === "" || recipe.cuisine === selectedCuisine;

    return matchName && matchCuisine;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🍳 Cooking Recipes</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Filter
          value={selectedCuisine}
          onChange={setSelectedCuisine}
          options={cuisines}
        />
      </div>

      {/* Recipe List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
