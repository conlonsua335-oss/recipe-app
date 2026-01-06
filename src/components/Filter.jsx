function Filter({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <option value="">All Cuisines</option>
      {options.map((cuisine) => (
        <option key={cuisine} value={cuisine}>
          {cuisine}
        </option>
      ))}
    </select>
  );
}

export default Filter;

