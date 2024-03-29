
import { useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveStoredBook } from "../../Components/Utility/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { Id } = useParams();
  const book = books.find((book) => book.Id === parseInt(Id));

  console.log(book, Id);

const [isRead, setIsRead] = useState(false);
const [isWishlist, setIsWishlist] = useState(false);

const addRead = () => {
  saveStoredBook(parseInt(Id));
  if(!isRead){
    setIsRead(true);
    setIsWishlist(false);
    localStorage.setItem(book.Id, 'read');
    toast.success('Added to Read');
  
  }
  else
{
  toast.error('Already Added');
}
};

 const addWishlist =() => {
  saveStoredBook(parseInt(Id));
  if(!isWishlist && ! isRead){
    setIsWishlist(true);
    localStorage.setItem(book.Id, 'wishlist');
    toast.success('Added to Wishlist')

  }
  else if (!isRead){
    toast.error('Already Added to Reading  list')

  }
  else{
    toast.error('Already Added to Wishlist')
  }
 }


 

  return (
    <div className="grid md:grid-cols-4 justify-center items-center py-6 px-10 gap-4">
    <div className="">
    
      <img src={book.image} className="object-cover w-full"></img>
    </div>
      
    <div className="grid md:cols-span-2">
    
    <h1 className="text-3xl font-extrabold">{book.bookName}</h1>
    <h3 className="text-xl font-bold">Author: {book.author}</h3>
    
    <p className="text-l font-medium">review: {book.review}</p>
    <p>Total Page: {book.totalPages}</p>
    <p>rating: {book.rating}</p>
    <p>Category: {book.category}</p>
    <div className="flex gap-4">
    <p className="text-green-500 font-bold text-l">#{book.tags[0]}</p>
    <p className="text-green-500 font-bold text-l">#{book.tags[1]}</p>
    </div>
    <p>publisher:{book.publisher}</p>
    <p>Publish Year: {book.yearOfPublishing}</p>
        <div className="flex md:flex gap-4">
        <button
        onClick={addRead}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Read
      </button>
      <button
        onClick={addWishlist}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Wishlist
      </button>
        </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default BookDetails;
