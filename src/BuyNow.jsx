import Book from "./Components/Book/Book";



const BuyNow = () => {
  return (
    <div>
    <h2>Hello</h2>
      <Book></Book>
      <button className="bg-green-500 hover:bg-green-700 text-white mt-6 font-bold py-2 px-4 rounded">Buy Now</button>
    </div>
  );
};

export default BuyNow;