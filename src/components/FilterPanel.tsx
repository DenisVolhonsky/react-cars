import React, { SetStateAction } from 'react';

interface FilterPanelProps {
  setFilter: React.Dispatch<SetStateAction<string>>
}

const FilterPanel: React.FC<FilterPanelProps> = ({ setFilter }) => {
  return (
    <div className='container'>
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
