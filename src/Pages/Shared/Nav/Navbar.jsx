import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/gallery">Photo Gallery</Link>
      </li>
      
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
      <li>
        <Link to="/" className="bg-red-600">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-black/70 backdrop-blur-md font-semibold text-white">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              x
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">GYM Master</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
