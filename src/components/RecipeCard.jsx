function RecipeCard({ recipe, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-32 h-32 object-cover"
        style={{
        width: "100%",
        height: "140px",
        objectFit: "cover"
        }}
      />

      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-lg font-semibold">
          {recipe.title}
        </h2>

        <p className="text-sm text-gray-500">
          {recipe.cuisine}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
