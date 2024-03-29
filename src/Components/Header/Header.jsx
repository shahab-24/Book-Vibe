import { NavLink } from "react-router-dom";


const Header = () => {
  const links = <>
    <li><NavLink to='/' className={({isActive}) => isActive ? 'text-accent text-xl shadow-lg  border font-bold' : 'font-bold'}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-accent text-xl font-bold' : 'font-bold'} to='/listed'>Listed Books</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-accent text-xl font-bold' : 'font-bold'} to='/pages'>Pages to Read</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-primary text-xl font-bold' : 'font-bold'} to='/buy'>Buy Now</NavLink></li>
    <li><NavLink className={({isActive}) => isActive ? 'text-primary text-xl font-bold' : 'font-bold'} to='/recommend'>Recommend</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100 max-w-5xl mx-auto mb-10 mt-6 shadow-lg z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="text-accent text-3xl font-extrabold">IsLamiC <span className='text-[chartreuse]'>BooKs</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn  bg-[chartreuse] font-extrabold mr-4">Sign In</a>
    <a className="btn btn-accent font-extrabold">Sign Up</a>
  </div>
</div>
  );
};

export default Header;