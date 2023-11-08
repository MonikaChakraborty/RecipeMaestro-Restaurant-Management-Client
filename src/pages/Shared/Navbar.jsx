import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-yellow-900 text-lg font-medium hover:text-gray-200"
              : "text-gray-200 text-lg font-medium hover:text-gray-200"
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
              ? "text-gray-200 bg-yellow-900  text-lg font-medium hover:text-gray-200"
              : "text-gray-200 text-lg font-medium hover:text-gray-200"
          }
        >
          Add Food Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-gray-200 bg-yellow-900 text-lg font-medium hover:text-gray-200"
              : "text-gray-200 text-lg font-medium hover:text-gray-200"
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
        <a className="btn btn-ghost normal-case text-gray-200 text-xl">
          RecipeMaestro
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-3"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] shadow bg-base-200 rounded-box w-30 lg:w-56 mt-3"
            >
              <li>
                <button className="btn btn-ghost text-sm lg:text-base bg-slate-200 normal-case mb-2">
                  {user.displayName}
                </button>
              </li>

              <li>
                <button
                  onClick={logOut}
                  className="btn btn-ghost text-sm lg:text-base  bg-slate-200 normal-case"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn mr-3">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};



export default Navbar;
