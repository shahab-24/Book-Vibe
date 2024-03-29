import  { useState, useEffect } from 'react';

import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';
import PagesToRead from '../PagesToRead/PagesToRead';
import BookDetails from '../../assets/BookDetails/BookDetails';




const ListedBooks = () => {
  const navigate = useNavigate()
  const books = useLoaderData();
  const {Id} = books;
  const [tabIndex, setTabIndex] = useState(0);
  const [sortBy, setSortBy] = useState('rating');

  const [findBooks, setFindBooks] = useState([]);


  useEffect(() => { 
    const storedBooks = getStoredBook();
    if (books.length > 0) {

      const bookStore =[];
      for(const id of storedBooks){
        const book = books.find(book => book.Id === id);
        if(book){
          bookStore.push(book)
        }
      }
      setFindBooks(bookStore);
    }
    
  }, []);





  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    
  };

  const readBooks = findBooks.filter(book => book.read);
  const wishlistBooks = findBooks.filter(book => !book.read);

  const displayBooks = tabIndex === 0 ? readBooks : wishlistBooks;

  const handleViewDetails=() =>{
    navigate(`/book/${Id}`)
  }
  

  return (
    
      <div className='px-6'>
       
       
         
        
       
       <h1 className="text-3xl font-bold mt-20">Listed Books: {findBooks.length}</h1>
        <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="bg-green-500 text-black text-center mt-6 mb-2 font-bold py-2 px-4 rounded w-40">Sort BY</h1>
        <select value={sortBy} onChange={handleSortChange} className="mr-4">
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
        </select>
      </div>

      


        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
	<Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-black`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read</span>
	</Link>
	<Link to={`wishlist`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400 text-black`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist</span>
	</Link>
  

</div> 


<Outlet></Outlet>




<div className="grid md:grid-cols-3 gap-4 mt-4 ">
        {displayBooks.map(book => (
          <div key={book.id} className="border p-4 shadow-xl rounded-xl">
            <div className='flex justify-center text-center items-center rounded-xl py-4'><img src={book.image} alt={book.bookName} /></div>
            <h1 className='text-3xl font-bold'>{book.bookName}</h1>
            <h2 className='text-xl font-bold'>{book.author}</h2>
            <p>Category: {book.category}</p>
            <div className='flex justify-between text-green-500 font-bold'>
            <p>#{book.tags[0]}</p>
            <p>#{book.tags[1]}</p>
            </div>
            <p>Total Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Publish Year: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
            <Link to=''>
       <button onClick={()=> handleViewDetails()} className="bg-green-500 hover:bg-green-700 text-white mt-6 font-bold py-2 px-4 rounded">View Details</button>
       </Link>
          </div>
        ))}
      </div>


       

   
      <PagesToRead readBooks={readBooks}></PagesToRead>
     
    </div>
  );
};

export default ListedBooks;



 