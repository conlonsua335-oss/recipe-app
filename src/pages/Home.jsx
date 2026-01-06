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
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  
  const cuisines = [...new Set(recipes.map((r) => r.cuisine))];

  
  const allIngredients = [
    ...new Set(recipes.flatMap((r) => r.ingredients))
  ];

  
  const filteredRecipes = recipes.filter((recipe) => {
    const keyword = searchTerm.toLowerCase();

    
    const matchSearch =
      recipe.title.toLowerCase().includes(keyword) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(keyword)
      );

    const matchCuisine =
      selectedCuisine === "" || recipe.cuisine === selectedCuisine;

    const matchIngredients =
      selectedIngredients.length === 0 ||
      selectedIngredients.every((ing) =>
        recipe.ingredients.includes(ing)
      );

    return matchSearch && matchCuisine && matchIngredients;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🍳 Cooking Recipes</h1>

      {/* Search */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 my-4">
        <Filter
          value={selectedCuisine}
          onChange={setSelectedCuisine}
          options={cuisines}
        />
      </div>

      {/* Ingredients Filter */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Filter by ingredients:</p>
        <div className="flex flex-wrap gap-3">
          {allIngredients.map((ing) => (
            <label key={ing} className="flex items-center gap-1 text-sm">
              <input
                type="checkbox"
                checked={selectedIngredients.includes(ing)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedIngredients([...selectedIngredients, ing]);
                  } else {
                    setSelectedIngredients(
                      selectedIngredients.filter((i) => i !== ing)
                    );
                  }
                }}
              />
              {ing}
            </label>
          ))}
        </div>
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

