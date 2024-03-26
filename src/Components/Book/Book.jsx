


const Book = ({book}) => {
  const {image,tags,bookName,author,category,rating} = book;
  return (
    <div>
      <img src={image}></img>
      <p>{tags}</p>
      <h2>{bookName}</h2>
      <h2>{author}</h2>
      <p>{category}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Book;