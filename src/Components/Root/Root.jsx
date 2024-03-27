
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';

const Root = () => {
  return (
    <div>
    <div>
      <Header></Header>
    </div>
   
     
      <Outlet></Outlet>
      

    </div>
  );
};

export default Root;