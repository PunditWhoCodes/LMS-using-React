// src/components/ui/FilterButtons.jsx
import React from 'react';

const FilterButtons = ({ categories, activeFilter, onFilterChange }) => (
  <div className="flex flex-wrap gap-2 mb-8">
    {categories.map(category => (
      <button
        key={category}
        className={`px-4 py-2 rounded-full border border-primary transition-colors
          ${activeFilter === category 
            ? 'bg-primary text-white' 
            : 'bg-white text-primary hover:bg-primary hover:text-white'}`}
        onClick={() => onFilterChange(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
);

export default FilterButtons;