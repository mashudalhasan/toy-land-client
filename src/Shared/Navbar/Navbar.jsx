import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              className="mr-2 lg:mr-3 h-10 sm:h-12"
              alt="Toy Land Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Toy Land
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-info capitalize rounded w-1/2 md:w-1/4">
          <Link to="login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
