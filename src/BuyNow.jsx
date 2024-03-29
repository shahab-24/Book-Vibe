import ListedBooks from "./Components/ListedBooks/ListedBooks";


const BuyNow = () => {
  return (
    <div>
      <ListedBooks></ListedBooks>
      <button className="bg-green-500 hover:bg-green-700 text-white mt-6 font-bold py-2 px-4 rounded">Buy Now</button>
    </div>
  );
};

export default BuyNow;