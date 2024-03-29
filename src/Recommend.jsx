import BookDetails from "./assets/BookDetails/BookDetails";


const Recommend = () => {
  return (
    <div>
      <BookDetails></BookDetails>
      <button className="bg-green-500 hover:bg-green-700 text-white mt-6 font-bold py-2 px-4 rounded">Recommend</button>
    </div>
  );
};

export default Recommend;