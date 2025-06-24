import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav bg-gray-800 text-white py-8">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <NavLink to="/" className="text-4xl font-bold">
              Start Framework
            </NavLink>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 font-bold lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
            />
          </svg>

          <ul className="lg:flex hidden justify-center items-center gap-10 text-xl font-bold">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#1abc9c] px-3 py-2 rounded"
                    : "hover:bg-[#1abc9c] px-3 py-2 rounded"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#1abc9c] px-3 py-2 rounded"
                    : "hover:bg-[#1abc9c] px-3 py-2 rounded"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#1abc9c] px-3 py-2 rounded"
                    : "hover:bg-[#1abc9c] px-3 py-2 rounded"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
