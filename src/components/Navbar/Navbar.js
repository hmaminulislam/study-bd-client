import React from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import {AuthContext} from '../contexts/AuthProvider'
import Logo from '../../assets/img/logo.png'
import { FaSun } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsBoxArrowRight } from "react-icons/bs";

const Navbar = () => {

  const [theme, setTheme] = useState("light")
  const { user, logOut } = useContext(AuthContext);

  //theme dark and light mode on off
  useEffect( () => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Log out button handle
  const logOutBtnHandle = () => {
    logOut()
    .then(() => {})
    .catch(e=> console.error(e))
    
  }
    return (
      <div className="navbar bg-primary text-white py-5 px-2 sm:px-10 md:px-20 dark:text-white dark:bg-stone-900">
        <div className="navbar-start dark:bg-stone-900 dark:text-white">
          <div className="dropdown dark:bg-stone-900 dark:text-white">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden border-base-300 mr-3"
            >
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="courses">Courses</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="faq">Faq</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="text-sm text-center md:text-4xl sm:text-3xl sm:font-bold font-semibold text-white sm:flex items-center dark:text-white"
          >
            <img style={{ maxWidth: "80px" }} src={Logo} alt="" />
            <span className="sm:mr-5">UTeachy</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex dark:bg-stone-900 dark:text-white">
          <ul className="menu menu-horizontal p-0 dark:bg-stone-900 dark:text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="courses">Courses</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="faq">Faq</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end dark:bg-stone-900">
          <div onClick={handleThemeSwitch} className="mr-4 cursor-pointer">
            <FaSun className="text-xl mr-1"></FaSun>
            <p className="font-semibold capitalize">{theme}</p>
          </div>
          {user?.photoURL ? (
            <>
              <span
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                  className="w-12 rounded-full h-12"
                  src={user.photoURL}
                  alt=""
                />
              </span>
              <p
                onClick={logOutBtnHandle}
                className="ml-3 cursor-pointer text-xl sm:text-3xl text-white dark:text-white"
              >
                <BsBoxArrowRight></BsBoxArrowRight>
              </p>
            </>
          ) : (
            <Link className="btn btn-primary" to="login">
              Log in
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;