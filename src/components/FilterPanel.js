const FilterPanel = ({ setFilter }) => {
  return (
    <div>
      <label>Filter by model:</label>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter model"
      ></input>
    </div>
  );
};
export default FilterPanel;
