import { useEffect, useState } from "react";

import Book from "../Book/Book";

const Home = () => {
  const [books, setBooks] = useState([6]);
  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>books{books.length}</h1>
      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {
          books.map(book => <Book key={book.Id} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Home;
