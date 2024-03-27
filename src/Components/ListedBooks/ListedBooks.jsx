import React, { useState, useEffect } from 'react';
import BookDetails from '../../assets/BookDetails/BookDetails';

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState('rating'); // Default sorting by rating
  const [books, setBooks] = useState([]);
  const [activeTab, setActiveTab] = useState('read');
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    // Fetch and set books data from localStorage
    const storedBooks = JSON.parse(localStorage.getItem('storedBooks'));
    if (storedBooks) {
      setBooks(storedBooks);
    }
  }, []);

  // Function to handle sorting
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Implement sorting logic here
  };

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle click on a book card
  const handleBookClick = (bookId) => {
    setSelectedBookId(bookId);
  };

  // Filter books based on active tab (read or wishlist)
  const filteredBooks = books.filter(book => activeTab === 'read' ? book.read : book.wishlist);

  return (
    <div>
      <h1 className="text-3xl font-bold">Listed Books</h1>
      {/* Dropdown for sorting */}
      <select value={sortBy} onChange={handleSortChange}>
        <option value="rating">Rating</option>
        <option value="totalPages">Number of Pages</option>
        <option value="yearOfPublishing">Published Year</option>
      </select>
      {/* Tabs for read and wishlist */}
      <div>
        <button onClick={() => handleTabChange('read')}>Read</button>
        <button onClick={() => handleTabChange('wishlist')}>Wishlist</button>
      </div>
      {/* Display list of books */}
      <div className="grid grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="border p-4" onClick={() => handleBookClick(book.id)}>
            <img src={book.image} alt={book.bookName} />
            <p>{book.bookName}</p>
            <p>{book.author}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      {/* Render BookDetailsPage conditionally */}
      {selectedBookId && <BookDetails bookId={selectedBookId} />}
    </div>
  );
};

export default ListedBooks;
