// src/components/ui/SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => (
  <div className="flex gap-4 mb-8">
    <input
      type="search"
      className="flex-grow p-3 text-base border border-gray-300 rounded-md"
      placeholder="Search book title here..."
      onChange={(e) => onSearch(e.target.value)}
    />
    <button 
      className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
    >
      <Search size={20} />
      Search
    </button>
  </div>
);

export default SearchBar;

