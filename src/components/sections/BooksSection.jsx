import React, { useState, useEffect } from 'react';
import { books, categories } from '../../data/books';
import BookCard from '../ui/BookCard';
import SearchBar from '../ui/SearchBar';
import FilterButtons from '../ui/FilterButton';

const BooksSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredBooks, setFilteredBooks] = useState(books.data);

  useEffect(() => {
    const filtered = books.data.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeFilter.toLowerCase() === "all" || 
                            book.subject.toLowerCase() === activeFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
    
    setFilteredBooks(filtered);
  }, [searchTerm, activeFilter]);

  return (
    <section id="books" className="py-16 bg-gray-50">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Books Collection</h2>
        
        <SearchBar onSearch={setSearchTerm} />
        
        <FilterButtons 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 py-8">
              No books found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;