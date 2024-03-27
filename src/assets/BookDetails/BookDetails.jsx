import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredBook } from "../../Components/Utility/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { Id } = useParams();
  const idInt = parseInt(Id);
  const book = books.find((book) => book.Id === idInt);
  console.log(book);


  const [selectedTab, setSelectedTab] = useState(0);
 

  const [readBtn, setReadBtn] = useState(false);
  const [wishBtn, setWishBtn] = useState(false);

  // const [isBookStorage, setBookStorage] = useState(false);

  // useEffect(() => {
  //   const bookStorage = localStorage.getItem(`book-${idInt}`)
  //   setBookStorage(!!bookStorage);
  // },[idInt]);


  // useEffect (() => {
  //   const storeBook = localStorage.getItem(`book-${idInt}`);
  //   if
  //     (storeBook === 'read'){
  //       setReadBtn(true);
        
  //     } else if(storeBook === 'wishlist'){
  //       setWishBtn(true);
  //     }
    
  // },[idInt]);


  const handleReadBtn = () => {
    setReadBtn(true);
    saveStoredBook(Id);
    setSelectedTab(1);
    // localStorage.setItem(`book-${idInt}` , 'read')
    toast("added to read");
   
  };

  const handleWishBtn = () => {
    if (!readBtn) {
      setWishBtn(true);
      setSelectedTab(1);
      // localStorage.setItem(`book-${idInt}`, 'wishlist');
      toast('added to wishlist')

      
    } else {
      toast.error("You have already added this book to read. You cant add it to wishlist")
      
    }
  };
  return (
    <div>
      <div className="grid gap-6 md: grid-cols-4">
        <div className="md:cols-span-1 px-6 gap-6">
          <img src={book.image} className="w-full rounded-xl"></img>
        </div>
        <div className="md:cols-span-3">
        <h1 className="text-3xl font-bold">{book.bookName}</h1>
        <h2 className="text-xl font-bold">Author: {book.author}</h2>
        <h4>category: {book.category}</h4>
        <p>review: {book.review}</p>
        <div>
        <p className="flex justify-between">{book.tags[0]}</p>
        <p>{book.tags[1]}</p>
        <ul>
          <li>{book.totalPages}</li>
          <li>{book.publisher}</li>
          <li>{book.yearOfPublishing}</li>
          <li>{book.rating}</li>
        </ul>
        <div className="flex justify-around">
        <button className="btn btn-primary" onClick={handleReadBtn}  >Read</button> 
        <button className="btn btn-secondary" onClick={handleWishBtn} >Wishlist</button> 
        <Link to='/listed'><button className="btn btn-primary">View The List</button></Link>
        </div>
        </div>
        
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
// disabled={readBtn || isBookStorage}
// disabled={wishBtn  ||isBookStorage || readBtn}


// return (
//   // Your BookDetails component JSX
//   <button className="btn btn-primary" onClick={handleReadBtn}>Read</button> 
//   <button className="btn btn-secondary" onClick={handleWishBtn}>Wishlist</button> 
//   <Link to="/listed-books">
//     <button className="btn btn-primary">View The List</button>
//   </Link>
// );
// };