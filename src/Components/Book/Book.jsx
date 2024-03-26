const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <div className="book">
      <img src={image} className="w-[80%] text-center"></img>
      <div className="flex justify-between">
      <p className="text-[chartreuse]">{book.tags.join(', ')}</p>
    
      </div>
      <h2 className="text-2xl font-bold">{bookName}</h2>
      <h2>{author}</h2>
      <div className="flex justify-between">
        <h3>{category}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
  );
};

export default Book;
