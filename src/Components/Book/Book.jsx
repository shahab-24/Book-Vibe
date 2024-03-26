import { Link } from "react-router-dom";
import '../../App.css'

const Book = ({ book }) => {
  const { Id, image, tags , bookName, author, category, rating } = book;

  return (
    <div>
      <Link to={`/book/${Id}`} className="transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 rounded-3xl">
      <div className="book">
      <img src={image} className="w-[80%] text-center book"></img>
      <div className="flex justify-between">
      <p className="text-[chartreuse] font-bold">{tags[0]}</p>
      <p className="text-[chartreuse] font-bold">{tags[1]}</p>
    
      </div>
      <h2 className="text-2xl font-bold">{bookName}</h2>
      <h2 className="font-bold text-l">By: {author}</h2>
      <div className="flex justify-between">
        <h3>{category}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
    </Link>
    
    </div>
    
  );
};

export default Book;
