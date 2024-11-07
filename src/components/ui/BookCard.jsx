// src/components/ui/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 ${book.subject.toLowerCase()}`}>
    <div className="h-48 overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h5 className="text-lg font-semibold mb-2">{book.title}</h5>
      <h6 className="text-sm text-gray-600 mb-1">Author: {book.author}</h6>
      <h6 className="text-sm text-gray-600 mb-1">Subject: {book.subject}</h6>
      <h6 className="text-sm text-gray-600">Date: {book.date}</h6>
    </div>
  </div>
);

export default BookCard;

