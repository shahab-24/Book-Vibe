import  { useState, useEffect } from 'react';

import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredBook } from '../Utility/LocalStorage';





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
    
      <div className='px-6 mx-auto max-w-5xl'>
       
       <h1 className="text-3xl font-bold mt-20 text-center">Books: {findBooks.length}</h1>
        <div className="flex flex-col justify-center items-center mt-6">
        <h1 className="bg-green-500 text-black text-center mt-6 mb-2 font-bold py-2 px-4 rounded w-40">Sort BY</h1>
        <select value={sortBy} onChange={handleSortChange} className="mr-4">
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
        </select>
      </div>


        <div className="flex items-center mx-auto max-w-5xl overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
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


<div className="gap-4 py-4 mt-4 mx-auto max-w-5xl ">
        {displayBooks.map(book => (
          <div key={book.id} className="border py-6 mb-4 p-4 shadow-xl flex  rounded-xl">
            <div className='text-center px-4 w-[230px] h-auto items-center rounded-xl py-4'><img src={book.image} alt={book.bookName} /></div>
           <div className='px-4 py-4 space-y-6'>
           <div className='py-4 space-y-4'>
            <h1 className='text-3xl font-bold'>{book.bookName}</h1>
            <h2 className='text-xl font-bold'>By: {book.author}</h2>
            
            </div>
            <div className='flex justify-around space-x-4 text-green-500 font-bold'>
            <h1>#{book.tags[0]}</h1>
            <h1>#{book.tags[1]}</h1>
            <div>
            <h1 className='text-black'>Publish Year: {book.yearOfPublishing}</h1></div>
            </div>
            
            <div className='flex justify-between'>
            <p><small>Total Pages: {book.totalPages}</small></p>
            <p><small>Publisher: {book.publisher}</small></p>
            </div>
            
            <div className='flex justify-around items-center'>
            <p style={{borderRadius: '30px'}}>Category: {book.category}</p>
            <p>Rating: {book.rating}</p>
            <Link to=''>
       <button onClick={()=> handleViewDetails()} className="bg-green-500 hover:bg-green-700 text-white mt-6 font-bold py-2 px-4 rounded">View Details</button>
       </Link>
            </div>
           </div>
       
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ListedBooks;



 