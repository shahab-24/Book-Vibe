import { useEffect, useState } from "react";
import Book from "../Book/Book";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import BookDetails from "../../assets/BookDetails/BookDetails";



const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
    
    <Banner></Banner>
    
    
    
      <h1 className="text-center font-extrabold text-3xl mb-6 mt-10">Books</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {books.map((book) => (
          <Book key={book.Id} book={book}></Book>
        ))}
        
      </div>
      
    </div>
  );
};

export default Home;
