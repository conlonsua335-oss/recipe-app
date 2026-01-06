function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search recipe..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/2 p-2 border rounded-md"
    />
  );
}

export default SearchBar;

