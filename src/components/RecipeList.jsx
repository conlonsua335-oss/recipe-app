import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeList;
