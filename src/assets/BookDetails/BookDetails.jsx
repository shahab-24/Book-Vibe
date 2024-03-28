import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const [book, setBook]= useState(null);
  // const book = books.find((book) => book.Id === parseInt(id));
  
 useEffect(() => {
  if (books) {
  const foundBook = books.find((book) => book.Id === parseInt(id));
  setBook(foundBook);
  }
 },[books, id]);

  const [isAddedToRead, setIsAddedToRead] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  const addToRead = () => {
    if (!isAddedToRead) {
      setIsAddedToRead(true);
      setIsAddedToWishlist(false);
      localStorage.setItem(book.Id, "read");
      Swal.fire({
        icon: "success",
        title: "Added to Read",
        text: "Book added to your reading list",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Already Added",
        text: "This book is already in your reading list",
      });
    }
  };

  const addToWishlist = () => {
    if (!isAddedToWishlist && !isAddedToRead) {
      setIsAddedToWishlist(true);
      localStorage.setItem(book.Id, "wishlist");
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: "Book added to your wishlist",
      });
    } else if (isAddedToRead) {
      Swal.fire({
        icon: "error",
        title: "Cannot Add to Wishlist",
        text: "This book is already in your reading list",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Already Added",
        text: "This book is already in your wishlist",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      {/* Your book details rendering */}
    <div>
    <image src={book.image}></image>



        <button
        onClick={addToRead}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Read
      </button>
      <button
        onClick={addToWishlist}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Wishlist
      </button>
    </div>
    </div>
  );
};

export default BookDetails;
