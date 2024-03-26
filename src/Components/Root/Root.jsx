
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Home from '../Home/Home';

const Root = () => {
  return (
    <div>
    <Header></Header>
    <Banner></Banner>
      <Outlet></Outlet>
      <Home></Home>

    </div>
  );
};

export default Root;