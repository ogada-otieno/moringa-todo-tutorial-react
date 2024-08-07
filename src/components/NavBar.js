import React from "react";
import { FaSun, FaMoon, FaSearch, FaBell, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ theme, handleThemeToggle, onSearch }) => {
  return (
    <div className="navbar bg-base-100 container mx-auto border-2 rounded-md mt-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/calender">Calender</NavLink>
            </li>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/todos">Todos</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          My Todo App
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/calender">Calender</NavLink>
          </li>
          <li>
            <details>
              <summary>Tasks</summary>
              <ul className="p-2">
                <li>
                  <NavLink to="/tasks">Task 1</NavLink>
                </li>
                <li>
                  <NavLink to="/tasks">Task 2</NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-2">
        <button className="btn btn-ghost btn-circle">
          <FaSearch className="h-5 w-5" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell className="h-5 w-5" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <FaUser className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/login" className="flex items-center">
                <FaUser className="mr-2" /> Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="flex items-center">
                <FaUser className="mr-2" /> Register
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          onClick={handleThemeToggle}
          className="btn btn-ghost btn-circle"
        >
          {theme === "light" ? (
            <FaMoon className="h-5 w-5" />
          ) : (
            <FaSun className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
