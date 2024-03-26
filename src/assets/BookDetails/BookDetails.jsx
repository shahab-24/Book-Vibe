import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { Id, image } = useParams();
  const idInt = parseInt(Id);
  const book = books.find((book) => book.Id === idInt);
  console.log(book);
  return (
    <div>
      <div className="grid md: grid-cols-4">
        <div className="md:cols-span-1">
          <img src={book.image} className="w-full"></img>
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
        <button className="btn btn-primary">Read</button> 
        <button className="btn btn-secondary">Wishlist</button> 
        </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
