import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="text-center font-bold text-3xl">
      <h2>Page Not Found</h2>
      <Link to='/'><button className="bg-green-500 text-white font-bold py-2 mt-4 px-4 rounded">Go Back</button></Link>
    </div>
  );
};

export default ErrorPage;