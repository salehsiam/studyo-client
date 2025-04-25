import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div className="navbar max-w-7xl md:px-8">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn text-white btn-ghost lg:hidden"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "underline text-green-500 font-semibold" : ""}`
                }
                to="/assignments"
              >
                Assignments
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "underline text-green-500 font-semibold" : ""
                    }`
                  }
                  to="/resources-notes"
                >
                  Resources
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "underline text-green-500 font-semibold" : ""
                    }`
                  }
                  to="/pending-assignments"
                >
                  Pending Assignments
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <button onClick={() => logout()}>Logout</button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
        <a
          onClick={() => {
            navigate("/");
          }}
          className="logo text-white font-semibold text-2xl lg:text-3xl"
        >
          <img src="" alt="" />
          Studyo
        </a>
      </div>

      <div className="navbar-end items-center ">
        <div className=" hidden text-white lg:flex">
          <ul className="gap-5 items-center menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "underline  font-semibold" : ""}`
                }
                to="/assignments"
              >
                Assignments
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "underline  font-semibold" : ""}`
                  }
                  to="/pending-assignments"
                >
                  Pending Assignments
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "underline font-semibold" : ""}`
                  }
                  to="/resources-notes"
                >
                  Resources
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <button
                  onClick={() => logout()}
                  className="btn bg-yellow-300 hover:bg-yellow-300 text-black px-6 rounded-2xl border-none"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn bg-yellow-300 hover:bg-yellow-300 text-black  px-6 rounded-2xl border-none">
                    Login
                  </button>
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
                className="btn btn-ghost relative btn-circle avatar"
              >
                <div className="w-8 rounded-full">
                  <img
                    className="tooltip"
                    title={user.displayName}
                    alt="User"
                    src={user.photoURL}
                  />
                  <MdOutlineKeyboardArrowDown className="text-white absolute bottom-0 right-2 text-2xl" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
              >
                <li>
                  <NavLink to="/create-assignment">Create Assignments</NavLink>
                </li>
                <li>
                  <NavLink to="/my-assessment">My Assessment</NavLink>
                </li>
                <li>
                  <NavLink to="/my-assignment">My Assignment</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
