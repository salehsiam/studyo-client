import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a
          onClick={() => {
            navigate("/");
          }}
          className="logo text-2xl lg:text-3xl"
        >
          Studyo
        </a>
      </div>

      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="gap-5 items-center menu-horizontal px-1">
            <li>
              <NavLink to="/assignments">Assignments</NavLink>
            </li>
            <li>
              {user && (
                <NavLink to="/pending-assignments">Pending Assignments</NavLink>
              )}
            </li>
            <li>
              {user ? (
                <button onClick={() => logout()} className="btn">
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 rounded-full">
                  <img
                    className="tooltip"
                    title={user.displayName}
                    alt="User"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
              >
                <li>
                  <a>Create Assignments</a>
                </li>
                <li>
                  <a>My Attempted Assignments</a>
                </li>
              </ul>
            </div>
          )}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </div>
            <ul
              tabIndex={0}
              className="menu right-0 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Assignments</a>
              </li>
              <li>
                <a>Pending Assignments</a>
              </li>
              <li>
                {user ? (
                  <button>Logout</button>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
