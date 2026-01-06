import { useParams, useNavigate } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p className="p-6">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-orange-500 mb-4 hover:underline"
      >
        ← Back
      </button>

      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
        width: "100%",
        height: "140px",
        objectFit: "cover"
        }}
      />

      <h1 className="text-3xl font-bold mb-2">
        {recipe.title}
      </h1>

      <p className="text-gray-500 mb-6">
        {recipe.cuisine}
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Ingredients
      </h2>

      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        Instructions
      </h2>

      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;

