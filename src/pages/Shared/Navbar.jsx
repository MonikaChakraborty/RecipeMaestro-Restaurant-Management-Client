import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {

    const navLinks = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-gray-200 bg-yellow-900 text-lg font-medium"
                  : "text-gray-200 text-lg font-medium"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
        <NavLink
          to="/allFoodItems"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-yellow-900  text-lg font-medium"
              : "text-gray-200 text-lg font-medium"
          }
        >
          Add Food Items
        </NavLink>
      </li>

      <li>
        <NavLink to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-yellow-900 text-lg font-medium"
              : "text-gray-200 text-lg font-medium"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );


  return (
    <div className="navbar bg-yellow-950	">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >

            {navLinks}

          </ul>
        </div>
        <img className="w-16 -mr-4 object-cover" src={logo} alt="logo" />
        <a className="btn btn-ghost normal-case text-gray-200 text-xl">Recipe Maestro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
        <button className="btn btn-ghost text-gray-200">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
